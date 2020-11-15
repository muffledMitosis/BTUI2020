import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { db } from '../../utils/firebase';

import { fancy_logo_fat } from '../../utils/consts';

function AuthCodeGetter() {

    const { register, handleSubmit} = useForm();

    const onSubmit = (data)=>{

    }

    let elem = (
        <div>
            <div className="login-box">
                <div className="imgCont"><img src={fancy_logo_fat}/></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>You don't seem to have authenticated yourself, please enter your BTUI auth code bellow. Dont't have one? Head over to btui.rccsonline.com/registration to get one</h3>
                        <div className="user-box">
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