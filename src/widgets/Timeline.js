import React from 'react';
import ReactDOM from 'react-dom';

import './timeline.css';

function Timeline() {
    let elem = (
        <div>
            <div id="timeline-content">
                <h1>Timeline</h1>

                <ul className="timeline">
                <li class="event" data-date="15th">
                    <h3>🖊️ Graphic Designing Talk session</h3>
                    <p>10:00AM - live talk session on graphic manipulation</p>
                    <p> 4:30PM - live talk session on graphic designing</p>
                </li>
                <li class="event" data-date="16th">
                    <h3>🖋️ Graphic Designing competition </h3>
                    <p>A graphic designing competition under a specific topic followed by a showcase.</p>    
                </li>
                <li class="event" id="date" data-date="17th">
                    <h3>🔧 Competitive Programming, an Introduction </h3>
                    <p>10:00AM - A live talk session By Adhithya Narasinghe</p>
                    <p> 2:00PM - "Programmiz" a competitive programming competition</p>
                </li>
                <li class="event" id="date" data-date="18th">
                    <h3>🐦 App Development with Flutter </h3>
                    <p>10:00AM - A live talk session by Dilum De Silva, the founder of The Colombo Flutter Community on the very basics of Flutter</p>
                    <p> 2:00PM - "The Counter app challenge" a competition on creating the best counter app design using flutter</p>
                </li>
                <li class="event" id="date" data-date="19th">
                    <h3>🦹‍♂️ CTF Challenge </h3>
                    <p>10:00AM - Capture the Flag Hacking Competition, where you have to compete in an online  multiplayer game, but win in unexpected ways</p>
                </li>
                <li class="event" id="date" data-date="20th">
                    <h3>🎮 Frostbyte Esports tournament </h3>
                    <p>10:00AM - An Esports tournament spanning 2 days including the games, Valorant, COD MW4, COD Mobile and PUBG Mobile</p>
                </li>
                <li class="event" id="date" data-date="22nd">
                    <h3>🎮 BTUI Game Jam </h3>
                    <p>10:00AM - A GameJam spanning 24 hours where teams compete with each other to build the best game under a topic in 24h</p>
                </li>
                <li class="event" id="date" data-date="24th">
                    <h3>🎉 Showcase </h3>
                    <p>10:00AM - The showcase and judgement of the created games</p>
                </li>
                </ul>

            </div>
        </div>
    );

    return elem;
}

export default Timeline;