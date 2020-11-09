import React from 'react';
import ReactDOM from 'react-dom';

// Use this file for styles
// MAKE SURE TO USE CLASSES XD
import './programwiz.css';

const btnClick = () => {
    console.log("LEMME IN");
}

function Programwiz() {
    let elem = (
        <div>
            <h1>Programwiz</h1>
            
            <div className="progRulesDiv">
                <h2>Rules And Regulations</h2>
            </div>

            <div>
                <button onClick={btnClick}>Goto Hakkarank</button>
            </div>

        </div>
    );

    return elem;
}

export default Programwiz;