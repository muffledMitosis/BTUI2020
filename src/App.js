import "./App.css";
import React from "react";
import * as consts from "./utils/consts.js";
import Countdown from "./widgets/countdown/countdown";
import SchoolRegProcess from "./views/school_reg/schoolRegProcess";
import GuestRegProcess from "./views/guest_reg/guestRegProcess";

import { analytics } from "./utils/firebase";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrationIntro from "./views/registration_intro/registrationIntro";
import Programwiz from "./views/programwiz/programwiz";
import Dashbash from "./views/dashbash/dashBash";
import Timeline from './widgets//mainTimeline/Timeline';
import Frostbyte from "./views/frostbyte/frostbyte";

import 'bootstrap/dist/css/bootstrap.min.css';
import ValorantRegProcess from "./views/frostbyte_games_reg/valorantRegProcess";
import MinecraftRegProcess from "./views/frostbyte_games_reg/minecraftRegProcess";
import DotaRegProcess from "./views/frostbyte_games_reg/dotaRegProcess";
import RocketLeagueRegProcess from "./views/frostbyte_games_reg/rocketLeagueRegProcess";
import LiveView from "./widgets/livePage/livePage";
import Armitage from "./views/armitage/armitage";
import AuthCodeGetter from "./views/auth_code_getter/authCodeGetter";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <div className="mainLanding">
              <img alt="" className="left_logo" src={consts.left_log} />
              <img alt="" className="left_logo_mobile" src={consts.crest_and_logo_mobile} />
              <div className="countDown">
                <Countdown time="Nov 15, 2020 10:00:00" />
              </div>
              <img alt="" className="main_btui_text" src={consts.main_btui_text} />
              <img alt="" className="main_btui_text_mobile" src={consts.main_logo_mobile} />
              <img alt="" className="main_back" src={consts.main_back} />
              <img alt="" className="main_back_mobile" src={consts.main_background_mobile} />
              <button className="register_button"
                onClick={() => {
                  window.location.href = "/registration";
                  analytics.logEvent("register_button_click");
                }}
              >
                Register
              </button>
            </div>

            <div>
              <Timeline />
            </div>


            {/* <div className="cdSection"> */}
            <div className="mainCount">
              <img alt="" className="pLogo" src={consts.btuiPLogo} />
              <Countdown looks="bigCountdown" time="Nov 15, 2020 10:00:00" />
            </div>
            {/* <img alt="" className="bgTextureTwo" src={consts.background_texture}/>
            </div> */}

            <div className="infoDiv">
              <img className="pcInfoDiv" alt="" src={consts.info_div_pc} />
              <img className="mobileInfoDiv" alt="" src={consts.mobile_info_div_one} />
              <img className="mobileInfoDiv" alt="" src={consts.mobile_info_div_two} />
            </div>
          </div>
        </Route>
        <Route exact path="/registration">
          <RegistrationIntro />
        </Route>
        <Route exact path="/registration/school">
          <SchoolRegProcess />
        </Route>
        <Route exact path="/registration/individual">
          <GuestRegProcess />
        </Route>
        <Route exact path="/registration/valorant">
          <ValorantRegProcess />
        </Route>
        <Route exact path="/registration/minecraft">
          <MinecraftRegProcess />
        </Route>
        <Route exact path="/registration/dota">
            <DotaRegProcess />
        </Route>
        <Route exact path="/registration/rocketleague">
            <RocketLeagueRegProcess />
        </Route>

        <Route exact path="/programwiz">
          <Programwiz />
        </Route>
        <Route exact path="/dashbash">
          <Dashbash />
        </Route>
        <Route exact path="/frostbyte"><Frostbyte /></Route>

        <Route exact path="/live">
          <LiveView liveLocation="mainLive" />
        </Route>
        <Route exact path="/armitage">
          <Armitage />
        </Route>
        <Route exact path="/auth">
          <AuthCodeGetter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
