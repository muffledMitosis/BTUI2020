import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./programmingweek.css";

const btnClick = () => {
  console.log("LEMME IN");
};

function Programwiz() {
  //document.getElementsByTagName("BODY")[0].style["background"] = "linear-gradient(#141e30, #243b55)";
  document.getElementsByTagName("BODY")[0].style["background"] = "#323232";
  let elem = (
    <div className="container-md">
      <div className="jumbotron shadow bg-dark text-aqua pb-4 mb-4">
        <h1 className="display-2 mb-4">Programwiz</h1>
        <p className="lead"><strong>Programwiz</strong> is a competitive programming competition. This is the time to test your programming skills and what you learnt from today. Get ready wizards! Lets code...</p>
        <hr className="bg-light my-4" size="1" />
        <p>Click the below button to enter the competition, you will be redirected to the official competition platform.</p>
        <button className="btn btn-lg btn-block outline-aqua bg-aqua" onClick={btnClick}>Enter Contest</button>
      </div>
      <div className="alert bg-transparent outline-aqua text-aqua" role="alert">
        <h4 className="alert-heading">This is the end of your day's adventure!</h4>
        <p className="text-aqua">Aww yeah, you successfully completed the day of <strong>Programming</strong>. 
        Stay tuned with us for more talk sessions and competitions. Hope you had a lot of fun. Thank You!</p>
        <hr className="outline-aqua" />
        <p className="mb-0 font-weight-lighter">Beyound The UI. A project by Royal College Computer Society.</p>
      </div>
    </div>
  );

  return elem;
}

export default Programwiz;
