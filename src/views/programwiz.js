import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./programwiz.css";

const btnClick = () => {
  console.log("LEMME IN");
};

function Programwiz() {
  document.getElementsByTagName("BODY")[0].style["background"] =
    "linear-gradient(#141e30, #243b55)";
  document.getElementsByTagName("BODY")[0].style["height"] = "100%";
  let elem = (
    <div className="container pwBody">
      <h1 className="display-1 pwTopic">Programwiz</h1>
      <hr color="white" />
      <div className="pwRulesSection">
        <h2 className="pwRulesH2">Rules And Regulations</h2>
        <ol className="pwRulesList">
          <li># Rule 1</li>
          <li># Rule 2</li>
          <li># Rule 3</li>
          <li># Rule 4</li>
        </ol>
      </div>
      <div>
        <button onClick={btnClick}>Enter Contest</button>
      </div>
    </div>
  );

  return elem;
}

export default Programwiz;
