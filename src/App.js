import './App.css';

import * as consts from './utils/consts.js';
import Countdown from './widgets/countdown';
import SchoolRegProcess from './views/schoolRegProcess';

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
              <div className="countDown"><Countdown /></div>
              <img alt="" className="main_btui_text" src={consts.main_btui_text}/>
              <img alt="" className="main_back" src={consts.main_back}/>
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
      </Switch>
    </Router>
  );
}

export default App;