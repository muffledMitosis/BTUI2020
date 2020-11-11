import './frostbyte.css';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import * as consts from '../utils/consts.js';

import Countdown from '../widgets/countdown';

function Frostbyte() {
    let elem = (
        <div>
            <div className="fb_main_div"><img className="fb_main_head" alt="" src={consts.FR_LOGO} /></div>
            <Carousel controls={false}>
                <Carousel.Item className="FRL_ITEM">
                    <img className="d-block w-100 " src={consts.FR_DOTA2} />
                    {/* <Carousel.Caption>
                        <h3>Dota 2</h3>
                        <p>Whatever Dota2 is lol, exciting? XD</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="FRL_ITEM">
                    <img className="d-block w-100 " src={consts.FR_VAL} />
                    {/* <Carousel.Caption>
                        <h3>Valorant</h3>
                        <p>A game of unmatchable strategy and deadly gunplay</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="FRL_ITEM">
                    <img className="d-block w-100 " src={consts.FR_MC} />
                    {/* <Carousel.Caption>
                        <h3>Minecraft</h3>
                        <p>Now who on Earth said Minecraft was boring?</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            <div className="FR_COUNTER">
                <Countdown looks="fr_timer" time="Nov 20, 2020 10:30:00" />
            </div>
            <div className="reg_div_fr">
                <div onClick={()=>{console.log("Valorant Click")}} className="GameRegCard gameRegValorant"><h2>Valorant</h2></div>
                <div onClick={()=>{console.log("Dota 2 Click")}} className="GameRegCard gameRegDT"><h2>Dota 2</h2></div>
                <div onClick={()=>{console.log("Minecraft Click")}} className="GameRegCard gameRegMC"><h2>Minecraft</h2></div>
            </div>
        </div>
    );

    return elem;
}

export default Frostbyte;