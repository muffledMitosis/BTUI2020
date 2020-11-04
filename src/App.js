import './App.css';

import * as consts from './utils/consts.js';
import Countdown from './utils/countdown';

function App() {
  return (
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
  );
}

export default App;