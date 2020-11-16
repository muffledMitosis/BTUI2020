import React from 'react';
import './armitage.css';

import Countdown from '../../widgets/countdown/countdown';

import {U_BTUI_LOGO} from '../../utils/consts';


const rulesRegs = [
    "Using Adobe Photoshop from Adobe Creative suite is recommended. All submissions should be in .psd format.",
    "A log record of the Photoshop editing process should be submitted alongside the .psd file. (Refer “Instructions”)",
    "Use of other tools is permitted, but the image should be imported into a .psd file after the processing. A detailed (in .txt format) description of the tools used and the purpose should be submitted with the .psd file.",
    "Contestant’s name, age, school (if applicable) and contact information should be submitted alongside the .psd file. (in .txt format)"
];

const instructions = [
    "Go to edit>preferences>history log in Photoshop.",
    "Turn on \"History Log\"",
    "Choose the “Text File” file option in “Save Log Items To”",
    "Choose your preferred location to save the log record. (This file should be submitted)"
]

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
                {/* <h3>(Use any style you like, go crazy!)</h3> */}
                <h2>"Connected but isolated"</h2>
                <div className="timerrrrrARM">
                    <h4>You Have</h4>
                    <Countdown looks="armitageTime" time="Nov 16, 2020 16:30:00" />
                    <h4>More</h4>
                    <h5>Use it wisely</h5>
                </div>
                <div className="armInstructions">
                    <h3>Hello {JSON.parse(window.localStorage.getItem('currentUser'))["firstName"]}, Upload your submission to the Armitage Uploads channel on Discord</h3>
                    <button onClick={()=>{window.location.href="https://discord.gg/J89VmEMGJY"}}>UPLOAD</button>
                    <h2>Rules And Regulations</h2>
                    <div className="armrulesDiv">
                        <ol>{rulesRegs.map(rule=><li>{rule}</li>)}</ol>
                    </div>
                    <h2>Instructions</h2>
                    <div className="armrulesDiv">
                        <ol>{instructions.map(rule=><li>{rule}</li>)}</ol>
                    </div>
                </div>
                
            </div>
        </div>
    );

    return elem;
}

export default Armitage;