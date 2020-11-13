import React from 'react';
import YouTube from 'react-youtube';
import {useState} from 'react';
import {db, analytics} from '../utils/firebase';
import Countdown from "./countdown";
import {U_BTUI_LOGO} from '../utils/consts';

import './livePage.css';

function LiveView(props) {
    document.getElementsByTagName("BODY")[0].style["background"] = "linear-gradient(to right, #232526, #414345)";
    document.getElementsByTagName("BODY")[0].style["animation"] = "streamGradient 10s ease infinite";
    document.getElementsByTagName("BODY")[0].style["background-size"] = "400% 400%";


    const masterPath = props["liveLocation"];

    const [heading, setHeading] = useState("");
    const [timeTillLive, setTimeTillLive] = useState("");
    const [live, setLive] = useState(false);
    const [description, setDescription] = useState("");
    const [videoID, setVideoID] = useState("");

    const playerOptions = {
        playerVars: {
            controls: 0,
            modestbranding: 1,
            // fs: 1
        }
    };

    const masterRef = db.collection('meta').doc(masterPath);
    masterRef.onSnapshot(doc=>{
        let data = doc.data();

        setDescription(d=>data["description"]);
        setHeading(d=>data["heading"]);
        setLive(d=>data["live"]);
        setTimeTillLive(d=>data["timeTillLive"]);
        setVideoID(d=>data["videoID"]);
    });

    let counter = live ? <p></p> : (<Countdown looks="liveCounter" time={timeTillLive} />);
    let status = live ? <h3>Live</h3> : <h3>Live In</h3>

    let elem = (
        <div className="mainLiveDiv">
            <div>
                <h1>{heading}</h1>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                {status}
                {counter}
            </div>
            <div className="videoDiv">
                <YouTube className="videoPlayer" videoId={videoID} opts={playerOptions} />
            </div>
            <img src={U_BTUI_LOGO}/>
        </div>
    );

    return elem;
}

export default LiveView;