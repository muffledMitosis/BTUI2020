import './sReg.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';

import { useForm } from "react-hook-form";

import {fancy_logo, fancy_logo_fat} from '../utils/consts';

import {db} from '../utils/firebase';

function SchoolRegProcess() {
    // const [parts, setParts] = useState(4);

    document.getElementsByTagName("BODY")[0].style["background"] = "linear-gradient(#141e30, #243b55)";

    const [progress, setProgress] = useState(1);
    const [parts, setParts] = useState(4);
    const [thePeeps, setThePeeps] = useState([]);
    const [schoolInfo, setSchoolInfo] = useState([]);

    const [initialStyles, setInitialStyles] = useState("setBlock");
    const [participantStyles, setParticipantStyles] = useState("setNone");
    const [formSpaceShow, setFormSpaceShow] = useState("setBlock");
    const [finalSpaceShow, setfinalSpaceShow] = useState("setNone");
    
    const { register, handleSubmit, watch, errors } = useForm();
    const individials = useForm();
    
    const onSubmit = data => {
        setParts(Number(data["parts"]) + 1);
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
        if((progress) > parts)
        {
            console.log(thePeeps);

            setParticipantStyles("setNone");
            setFormSpaceShow("setNone");
            setfinalSpaceShow("setBlock");
        }
    }

    const yesButtonClick = ()=>{
        // TODO: Show Loading icon instead of button
        let baseRef = db.collection('users').doc('schools').collection('schoolsRegistered');
        baseRef.add({
            "schoolName": schoolInfo["schoolName"],
            "numberOfParticipants": Number(schoolInfo["parts"]),
            "TICcontact": schoolInfo["ticContact"],
            "email": schoolInfo["email"]
        }).then((docRef)=>{
            console.log("Done Writing school data to db");

            thePeeps.forEach(person =>{
                baseRef.doc(docRef.id).collection('participants').add({
                    "firstName": person["fName"],
                    "lastName": person["lName"],
                    "email": person["email"]
                }).then(console.log("didPersonWrite")).catch(e=>console.log(e));
            });

            console.log("participant write complete");
                // TODO: Hide progress wheel
                // GOT CONGRATS PAGE (show them their ids)
        }).catch(e=>console.log(e));
    }

    let elem = (
        <div className="bigOneLol">
            <div className="login-box">
                <div className="imgCont"><img src={fancy_logo_fat}/></div>
                <div className={"FormSpace " + formSpaceShow}>
                <form className={"initialInfoDiv " + initialStyles} onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <div className="user-box">
                            <input type="text" name="schoolName" ref={register({ required: true })} />
                            <label>Name Of School</label>
                        </div>
                        <div className="user-box">
                            <input type="number" name="parts" max="12" min="4" ref={register({ required: true })} />
                            <label>No. Of Participants</label>
                        </div>
                        <div className="user-box">
                            <input type="email" name="email" ref={individials.register({ required: true })} />
                            <label>Club Email Address</label>
                        </div>
                        <div className="user-box">
                            <input type="tel" name="ticContact" maxLength="10" minLength="10" ref={register({ required: true })} />
                            <label>Contact of TIC</label>
                        </div>
                    </div>
                    <div><p className="warningPSTD">* Please Input valid email addresses since BTUI access codes will be 
                        emailed to you, of without you will not be able to access the events of BTUI</p>
                    </div>
                    <div className="ProgressDiv"><p>{progress} of {parts}</p><button>Next</button></div>
                </form>


                <form className={"participantInfoDiv " + participantStyles} onSubmit={individials.handleSubmit(participantOnSubmit)}>
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
                    <h4>Participants</h4>
                    <ul>{thePeeps.map(peep => <li>{peep["fName"] + " " + peep["lName"]}</li>)}</ul>
                    <div className="ProgressDiv"><button onClick={yesButtonClick}>Yes</button><button onClick={()=>window.location.href="/registration/school"}>No</button></div>
                </div>
            </div>
        </div>
    );

    return elem;
}

export default SchoolRegProcess;