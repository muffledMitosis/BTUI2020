import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './authCodeGetter.css';
import { db } from '../../utils/firebase';

import { fancy_logo_fat } from '../../utils/consts';

function AuthCodeGetter() {

    const { register, handleSubmit} = useForm();

    let schooleBaseRef = db.collection('users').doc('schools').collection('schoolsRegistered');
    let guestBaseRef = db.collection('users').doc('individuals').collection('individualsRegistered');

    const onSubmit = (data)=>{
        let [code, type] = String(data["authCode"]).split("_");
        console.log(code, type);
        const wantedFor = window.localStorage.getItem('wantedFor');

        let personFound = false;
        let personData = {};
        if(type == "SCH"){
            schooleBaseRef.get()
                .then(async schoolsSnap=>{
                    schoolsSnap.forEach(async school=>{
                        let person = await schooleBaseRef.doc(school.id).collection('participants').where("uid", "==", String(data["authCode"])).get();
                        if(!person.empty){
                            console.log(person.docs[0].data());
                            personFound = true;
                            localStorage.setItem('currentUser', JSON.stringify(person.docs[0].data()));
                            localStorage.setItem('currentUserSchool', String(school.id));
                            window.location.href=wantedFor;
                        }
                    }
                    );
                    if(!personFound) {
                        console.log("wrongCOde");
                    }
                });
        }else if(type == "IND") {
            guestBaseRef.doc(code).get()
                .then(doc=>{
                    if(doc.exists)
                    {
                        localStorage.setItem('currentUser', JSON.stringify(doc.data()));
                        window.location.href=wantedFor;
                    }else {
                        console.log("wrong code");
                    }
                    
                }).catch(e=>console.log("wrong code"))
        }

    }

    let elem = (
        <div>
            <div className="login-box">
                <div className="imgCont"><img src={fancy_logo_fat}/></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <p>You don't seem to have authenticated yourself, please enter your BTUI auth code bellow. Dont't have one? Head over to <a href="/registration">btui.rccsonline.com/registration</a> to get one</p>
                        <div className="user-box codeGetter">
                            <input type="text" name="authCode" ref={register({ required: true })} />
                            <label>Authentication Code</label>
                        </div>
                        <button>
                            Proceed
                        </button>
                </form>
            </div>
        </div>
    );

    return elem;
}

export default AuthCodeGetter;