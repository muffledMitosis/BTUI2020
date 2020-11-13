import React from 'react';
import ReactDOM from 'react-dom';

import './timeline.css';

function FRB_TIMELINE() {
    let elem = (
        <div class="timeline-body">
            <div id="timeline-content">
                <h1 className="timelineH1">Timeline</h1>

                <ul className="timeline">
                    <li class="event" data-date="20th">
                        <h3>Valorant</h3>
                        <p>10:30AM onwards</p>
                    </li>
                    <li class="event" data-date="20th">
                        <h3>Rocket League</h3>
                        <p>2:30PM onwards</p>
                    </li>
                    <li class="event" data-date="21st">
                        <h3>Dota 2</h3>
                        <p>10:30AM onwards</p>
                    </li>
                    <li class="event" data-date="21st">
                        <h3>Minecraft</h3>
                        <p>2:30PM onwards</p>
                    </li>
                </ul>

            </div>
        </div>
    );

    return elem;
}

export default FRB_TIMELINE;