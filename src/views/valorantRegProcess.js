import './sReg.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';

import { useForm } from "react-hook-form";

import {VAL_REG_LOGO} from '../utils/consts';

import {db} from '../utils/firebase';

function ValorantRegProcess() {
    // const [parts, setParts] = useState(4);

    document.getElementsByTagName("BODY")[0].style["background"] = "linear-gradient(#141e30, #243b55)";

    const [progress, setProgress] = useState(1);
    const [parts, setParts] = useState(6);

    const [thePeeps, setThePeeps] = useState([]);
    const [peepIDs, setThePeepIDs] = useState([]);

    const [schoolInfo, setSchoolInfo] = useState([]);

    const [initialStyles, setInitialStyles] = useState("setBlock");
    const [participantStyles, setParticipantStyles] = useState("setNone");
    const [formSpaceShow, setFormSpaceShow] = useState("setBlock");
    const [finalSpaceShow, setfinalSpaceShow] = useState("setNone");
    const [congratsSpaceShow, setCongratsSpaceShow] = useState("setNone");
    
    const { register, handleSubmit, watch, errors } = useForm();
    const individials = useForm();
    
    const onSubmit = data => {
        // setParts(Number(data["parts"]) + 1);
        setProgress(pastProg => pastProg+1);
        setInitialStyles("setNone");
        setParticipantStyles("setBlock");
        setSchoolInfo(data);
        console.log(data);
    };

    
    const participantOnSubmit = data => {
        setProgress(pastProg => pastProg+1);
        console.log(data);
        setThePeeps(preP => [...preP, data]);
        if((progress) >= parts)
        {
            console.log(thePeeps);

            setParticipantStyles("setNone");
            setFormSpaceShow("setNone");
            setfinalSpaceShow("setBlock");
        }
    }

    const yesButtonClick = ()=>{
        // TODO: Show Loading icon instead of button
        console.log(schoolInfo);
        console.log(thePeeps);
        let baseRef = db.collection('users').doc('frostbyte').collection('games').doc('valorant').collection('teamsRegistered');
        baseRef.add({
            "teamName": schoolInfo["teamName"],
            "teamContact": schoolInfo["contact"],
            "email": String(schoolInfo["email"])
        }).then((docRef)=>{
            console.log("Done Writing team data to db");

            thePeeps.forEach(person =>{
                baseRef.doc(docRef.id).collection('teamMembers').add({
                    "firstName": person["fName"],
                    "lastName": person["lName"],
                    "email": person["email"],
                    "riotID": person["riotID"],
                    "nic": person["nic"]
                }).then(personRef=>{
                    baseRef.doc(docRef.id).collection('teamMembers').doc(personRef.id).update({"uid": (personRef.id + "_FRB_VA")}).then(()=>{
                        console.log("write complete");
                        setThePeepIDs(preIDs => [...preIDs, {name: (`${person["fName"]} ${person["lName"]}`),id: (personRef.id + "_FRB_VA")}]);
                    }).catch(e=>console.log(e));
                }).catch(e=>console.log(e));
            });

            console.log("participant write complete");
                // TODO: Hide progress wheel
                // GOT CONGRATS PAGE (show them their ids)
                setfinalSpaceShow("setNone");
                setCongratsSpaceShow("setBlock");
        }).catch(e=>console.log(e));
    }

    let elem = (
        <div className="bigOneLol">
            <div className="login-box">
                <div className="imgCont"><img src={VAL_REG_LOGO}/></div>
                <div className={"FormSpace " + formSpaceShow}>
                <form className={"initialInfoDiv " + initialStyles} onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <div className="user-box">
                            <input type="text" name="teamName" ref={register({ required: true })} />
                            <label>Team Name</label>
                        </div>
                        <div className="user-box">
                            <input type="email" name="email" ref={register({ required: true })} />
                            <label>Team Email Address</label>
                        </div>
                        <div className="user-box">
                            <input type="tel" name="contact" maxLength="10" minLength="10" ref={register({ required: true })} />
                            <label>Team Contact Number</label>
                        </div>
                    </div>
                    <div><p className="warningPSTD">* Please Input valid email addresses since BTUI access codes will be 
                        emailed to you, of without you will not be able to access the events of BTUI</p>
                    </div>
                    <div className="ProgressDiv"><p>{progress} of {parts}</p><button>Next</button></div>
                </form>


                <form className={"participantInfoDiv " + participantStyles} onSubmit={individials.handleSubmit(participantOnSubmit)}>
                    <h4 className="partText">Participant {(Number(progress)-1)} of {parts-1}</h4>
                    <div >
                        <div className="user-box">
                            <input type="text" name="fName" ref={individials.register({ required: true })} />
                            <label>First Name</label>
                        </div>
                        <div className="user-box">
                            <input type="text" name="lName" ref={individials.register({ required: true })} />
                            <label>Last Name</label>
                        </div>
                        <div className="user-box">
                            <input type="email" name="email" ref={individials.register({ required: true })} />
                            <label>Email Address</label>
                        </div>
                        <div className="user-box">
                            <input type="text" name="riotID" ref={individials.register({ required: true })} />
                            <label>Riot ID</label>
                        </div>
                        <div className="user-box">
                            <input type="text" name="nic" ref={individials.register()} />
                            <label>NIC Number</label>
                        </div>
                    </div>
                    <div><p className="warningPSTD">* Please Input valid email addresses since BTUI access codes will be 
                        emailed to you, of without you will not be able to access the events of BTUI</p>
                    </div>
                    <div className="ProgressDiv"><p>{progress} of {parts}</p><button>Next</button></div>
                </form>
                </div>
                <div className={"FinalSpace " + finalSpaceShow}>
                    <p>
                        Cool, The Registration process is almost complete. Is the following information accurate?
                    </p>
                    <h4>Team Members</h4>
                    <ul>{thePeeps.map(peep => <li>{peep["fName"] + " " + peep["lName"]}</li>)}</ul>
                    <div className="ProgressDiv"><button onClick={yesButtonClick}>Y E S</button><button onClick={()=>window.location.href="/registration/valorant"}>N O</button></div>
                </div>
                <div className={"CongratsSpace " + congratsSpaceShow}>
                    <p>Congrats! You've successfully registered for Valorant</p>
                    <h5>Access Codes for each team member</h5>
                    <ul>{peepIDs.map(peep=><li><p>{peep["name"]}</p><p className="uidStyleText">{peep["id"]}</p></li>)}</ul>
                    <p className="accesscodeWarning">* Keep these access codes with you at all times and do not share these with anyone, you'll be needing this to access certain parts of the BTUI website</p>
                    <hr />
                    <p>Join the BTUI Discord Server, where we'll be posting regular updates of Talk sessions, competitoins and other related events</p>
                    <div className="sRegDiscrodServerJoinButtonDiv"><button className="sRegDiscrodServerJoinButton" onClick={()=>{window.location.href="https://discord.gg/d8ZZdhHEDk"}}>J O I N</button></div>
                </div>
            </div>
        </div>
    );

    return elem;
}

export default ValorantRegProcess;