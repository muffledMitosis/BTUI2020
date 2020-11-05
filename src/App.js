import './App.css';

import * as consts from './utils/consts.js';
import Countdown from './widgets/countdown';
import SchoolRegProcess from './views/schoolRegProcess';
import GuestRegProcess from './views/guestRegProcess';

import {analytics} from './utils/firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <div className="mainLanding">
              <img alt="" className="left_logo" src={consts.left_log} />
              <img alt="" className="left_logo_mobile" src={consts.crest_and_logo_mobile} />
              <div className="countDown"><Countdown /></div>
              <img alt="" className="main_btui_text" src={consts.main_btui_text}/>
              <img alt="" className="main_btui_text_mobile" src={consts.main_logo_mobile} />
              <img alt="" className="main_back" src={consts.main_back}/>
              <img alt="" className="main_back_mobile" src={consts.main_background_mobile} />
              <div className="register_button">Register</div>
            </div>

            <div className="cdSection">
              <div className="mainCount">
                <img alt="" className="pLogo" src={consts.btuiPLogo} />
                <Countdown looks="bigCountdown" />
              </div>
              <img alt="" className="bgTextureTwo" src={consts.background_texture}/>
            </div>
          </div>
        </Route>
        <Route exact path="/registration/school"><SchoolRegProcess /></Route>
        <Route exact path="/registration/individual"><GuestRegProcess /></Route>
      </Switch>
    </Router>
  );
}

export default App;