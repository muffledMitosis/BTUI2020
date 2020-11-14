import React from 'react';
import YouTube from 'react-youtube';
import {useState} from 'react';
import {db, analytics} from '../utils/firebase';
import Countdown from "./countdown";
import {U_BTUI_LOGO} from '../utils/consts';

import './livePage.css';

function LiveView(props) {
    // document.getElementsByTagName("BODY")[0].style["background"] = "linear-gradient(to right, #232526, #414345)";
    document.getElementsByTagName("BODY")[0].style["background"] = "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)";
    document.getElementsByTagName("HTML")[0].style["overflow"] = "hidden";
    document.getElementsByTagName("HTML")[0].style["height"] = "100%";
    // document.getElementsByTagName("BODY")[0].style["background-color"] = "rgb(200, 200, 100)";
    // document.getElementsByTagName("BODY")[0].style["animation"] = "streamGradient 10s ease infinite";
    // document.getElementsByTagName("BODY")[0].style["background-size"] = "400% 400%";


    const masterPath = props["liveLocation"];

    const [heading, setHeading] = useState("");
    const [live, setLive] = useState(false);
    const [description, setDescription] = useState("");
    const [videoID, setVideoID] = useState("");

    const [counter, setCounter] = useState((<p></p>));

    const playerOptions = {
        width: (window.innerWidth<700) ? String(window.innerWidth - 100) : '640',
        height: '390',
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
        setVideoID(d=>data["videoID"]);
        if(!data["live"])
        {
            setCounter(d=>(<Countdown looks="liveCounter" time={data["timeTillLive"]} />));
        }
    });

    let status = live ? <h3>L I V E</h3> : (<div><h3>L I V E</h3><h3>I N</h3></div>);

    let elem = (
        <div>
            <div className="mainLiveDiv">
                <div>
                    <h1 data-content={heading}>{heading}</h1>
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
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
        </div>
    );

    return elem;
}

export default LiveView;