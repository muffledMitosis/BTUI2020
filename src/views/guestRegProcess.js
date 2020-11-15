import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';

import { useForm } from "react-hook-form";
import {db} from '../utils/firebase';

import {fancy_logo_fat} from '../utils/consts';

function GuestRegProcess() {

    document.getElementsByTagName("BODY")[0].style["background"] = "linear-gradient(#141e30, #243b55)";

    const [initialView, setInitialView] = useState("setBlock");
    const [confView, setConfView] = useState("setNone");

    const [access_code, setAccess_code] = useState("");

    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data);

        db.collection('users').doc('individuals').collection('individualsRegistered').add({
            "firstName": data["fName"],
            "lastName": data["lName"],
            "email": data["email"],
            "tel": data["mobNum"]
        }).then((personRef)=>{
            console.log("done writing");
            // TODO: goto congrats page and show UIDs
            db.collection('users').doc('individuals').collection('individualsRegistered').doc(personRef.id).update({
                "uid": (personRef.id + "_IND")
            }).then(()=>{
                setAccess_code(personRef.id + "_IND");
                setInitialView("setNone");
                setConfView("setBlock");
            });
        }).catch(e=>console.log(e));
    };

    let elem = (
        <div>
            <div className="login-box">
                <div className="imgCont"><img src={fancy_logo_fat}/></div>
                <div className={"initialForm " + initialView}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="user-box">
                            <input type="text" name="fName" ref={register({ required: true })} />
                            <label>First Name</label>
                        </div>
                        <div className="user-box">
                            <input type="text" name="lName" ref={register({ required: true })} />
                            <label>Last Name</label>
                        </div>
                        <div className="user-box">
                            <input type="email" name="email" ref={register({ required: true })} />
                            <label>Email Address</label>
                        </div>
                        <div className="user-box">
                            <input type="tel" name="mobNum" maxLength="10" minLength="10" ref={register({ required: true })} />
                            <label>Mobile Number</label>
                        </div>
                        <div><p className="warningPSTD">* Please Input valid email addresses since BTUI access codes will be 
                        emailed to you, of without you will not be able to access the events of BTUI</p>
                        </div>
                        <button>
                            Register
                        </button>
                    </form>
                </div>
                <div className={"confInfoDiv " + confView}>
                    <p>Congrats! You've successfully registered for BTUI 2020. Here's your access-code.</p>
                    <p className="uidStyleText singleThingLOLOLO">{access_code}</p>
                    <p className="accesscodeWarning">* Keep this access code with you at all times and DO NOT share it with anyone, you'll be needing this to access certain parts of the BTUI website</p>
                    <hr className="custom-hr"/>
                    <p>Join the BTUI Discord Server, where we'll be posting regular updates of Talk sessions, competitoins and other related events</p>
                    <div className="sRegDiscrodServerJoinButtonDiv"><button className="sRegDiscrodServerJoinButton" onClick={()=>{window.location.href="https://discord.gg/d8ZZdhHEDk"}}>J O I N</button></div>
                </div>
            </div> 
        </div>
    );

    return elem;
}

export default GuestRegProcess;