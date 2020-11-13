import React from 'react';
import ReactDOM from 'react-dom';

import {fancy_logo_fat} from '../utils/consts';
import { analytics } from '../utils/firebase';

import './registration.css'

function RegistrationIntro() {

    document.getElementsByTagName("BODY")[0].style["background"] = "linear-gradient(#141e30, #243b55)";

    let elem = (
        <div>
            <div className="login-box">
                <div className="imgCont"><img src={fancy_logo_fat}/></div>
                <div className="explenationDiv">
                    {/* <p>
                    Beyond The User Interface is an online convention for all who have one thing in common, the passion for progression in the field of technology. In order to challenge our users regardless of your standing in your level of skill we have prepared a multitude of events on variety of disciplines like Graphics Design, Ethical Hacking, Game Developement, ESports, competitions, networking sessions and much more. The conventions signature event will be the online treasure hunt. As the name the event suggests we have designed a custom made interface for a smooth and seamless progress for our users. Register by clicking on the button below.
                    </p> */}

                    <div className="registerButtonsDiv">
                        <button onClick={()=>{window.location.href="/registration/school"; analytics.logEvent("sch_reg_button_click");}}>S C H O O L</button>
                        <button onClick={()=>{window.location.href="/registration/individual"; analytics.logEvent("ind_reg_button_click");}}>I N D I V I D U A L</button>
                        <button onClick={()=>{window.location.href="/frostbyte"; analytics.logEvent("FRB_reg_button_click");}}>F R O S T B Y T E</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return elem;
}

export default RegistrationIntro;