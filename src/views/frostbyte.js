import './frostbyte.css';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import * as consts from '../utils/consts.js';

import Countdown from '../widgets/countdown';

function Frostbyte() {
    let elem = (
        <div>
            <div className="fb_main_div">
                <img className="fb_main_head" alt="" src={consts.FR_LOGO} />
                <img className="unified_btui_logo_FB" alt="" src={consts.U_BTUI_LOGO} />
            </div>
            <Carousel controls={false}>
                <Carousel.Item>
                    <div className="FRL_ITEM FRL_DT"></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="FRL_ITEM FRL_VL"></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="FRL_ITEM FRL_MC"></div>
                </Carousel.Item>
            </Carousel>
            <div className="FR_COUNTER">
                <h1 className="FR_REGISTER_NOW_TXT" data-text="Register Now!">Register Now!</h1>
                <Countdown looks="fr_timer" time="Nov 20, 2020 10:30:00" />
            </div>
            <div className="reg_div_fr">
                <div onClick={()=>{window.location.href = "/registration/valorant"}} className="GameRegCard gameRegValorant"><h2>Valorant</h2></div>
                <div onClick={()=>{console.log("Dota 2 Click")}} className="GameRegCard gameRegDT"><h2>Dota 2</h2></div>
                <div onClick={()=>{console.log("Minecraft Click")}} className="GameRegCard gameRegMC"><h2>Minecraft</h2></div>
            </div>
        </div>
    );

    return elem;
}

export default Frostbyte;