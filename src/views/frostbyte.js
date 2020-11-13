import './frostbyte.css';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import * as consts from '../utils/consts.js';

import Countdown from '../widgets/countdown';
import FRB_TIMELINE from '../widgets/frbTimeLine';

const rulePrerequisites = [
    "All players must register with their full name and username, but the username will be used in the esport events to refer to the player.",
    "In discord you will be nicked to your username to reduce confusion",
    "Once registrations are complete no new members will be allowed to enter into your team",
    "Players must have legit, working, and updated games already installed in their systems."
];

const rulesInEvent = [
    "Using any sort of illegal modification to the game or using an external resource that will give an unfair advantage will result in immediate disqualification of the entire team.",
    "Using any inappropriate language, references, controversial topics are strictly prohibited as communication mediums will be monitored. Warnings will be issued and if the team refuses to cooperate, the team will be disqualified and the case will not be reviewed",
    "Abusing any game mechanics as to have an unfair advantage is strictly prohibited ",
    "It is mandatory for teams to use the discord vc provided for them by us(for administration purposes), and using any other communication method during events is prohibited. Only the participants of the event should be allowed to enter this vc and all other teammates should be prevented from entering.",
    "Cross teaming is strictly prohibited, and will result in both teams being disqualified.",
    "If in any case a player gets disconnected from a match, the game will be paused and the team will be given 1 chance to have the game restarted. If the game cannot be paused the team must call in a restart within the first 5 seconds since the player got disconnected. A team can only ask a restart once.",
    "If in any case a team refuses to Participate in a event, Honor decisions taken by the judge panel, Honour rules and regulations imposed The team will automatically be forfeit from the tournament."
];

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
                <div onClick={()=>{window.location.href = "/registration/dota"}} className="GameRegCard gameRegDT"><h2>Dota 2</h2></div>
                <div onClick={()=>{window.location.href = "/registration/minecraft"}} className="GameRegCard gameRegMC"><h2>Minecraft</h2></div>
                <div onClick={()=>{window.location.href = "/registration/rocketleague"}} className="GameRegCard gameRegRL"><h2>Rocket League</h2></div>
            </div>
            <div className="frostbyteRulesDiv">
                <h2>Rules and Regulations</h2>
                <h3>Prerequisites</h3>
                <ol>{rulePrerequisites.map(str=><li>{str}</li>)}</ol>
                <h3>In Game/Event</h3>
                <ol>{rulesInEvent.map(str=><li>{str}</li>)}</ol>
            </div>
            <div>
                <FRB_TIMELINE />
            </div>
        </div>
    );

    return elem;
}

export default Frostbyte;