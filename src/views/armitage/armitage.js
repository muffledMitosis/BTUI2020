import React from 'react';
import './armitage.css';

import Countdown from '../../widgets/countdown/countdown';

import {U_BTUI_LOGO} from '../../utils/consts';

function Armitage() {
    document.getElementsByTagName("BODY")[0].style["background"] = "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)";
    // document.getElementsByTagName("HTML")[0].style["overflow"] = "hidden";
    document.getElementsByTagName("HTML")[0].style["height"] = "100%";

    if(!window.localStorage.getItem('currentUser')) {
        window.localStorage.setItem('wantedFor', '/armitage');
        window.location.href = "/auth";
    }else {
        console.log(JSON.parse(window.localStorage.getItem('currentUser')));
    }

    let elem = (
        <div>
            <div className="mainArmLanding">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div className="mainArmContainer">
                    <h1>Armitage</h1>
                    <img src={U_BTUI_LOGO} />
                </div>
            </div>
            <div className="compContent">
                <h1>Welcome To Day 2 of BTUI</h1>
                <h2>"Fancy Saying for the topic lol"</h2>
                <div className="timerrrrrARM">
                    <h4>You Have</h4>
                    <Countdown looks="armitageTime" time="Nov 16, 2020 16:30:00" />
                    <h4>More</h4>
                    <h5>Use it wisely</h5>
                </div>
                <div className="armInstructions">
                    <h3>Hello {JSON.parse(window.localStorage.getItem('currentUser'))["firstName"]}, Upload your submissions to the Armitage Uploads channel on Discord</h3>
                    <button onClick={()=>{window.location.href="https://discord.gg/J89VmEMGJY"}}>UPLOAD</button>
                </div>
            </div>
        </div>
    );

    return elem;
}

export default Armitage;