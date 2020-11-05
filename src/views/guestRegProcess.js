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

    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data);

        db.collection('users').doc('individuals').collection('individualsRegistered').add({
            "firstName": data["fName"],
            "lastName": data["lName"],
            "email": data["email"],
            "tel": data["mobNum"]
        }).then(()=>{
            console.log("done writing");
            // TODO: goto congrats page and show UIDs
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

                </div>
            </div> 
        </div>
    );

    return elem;
}

export default GuestRegProcess;