import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../programmingweek.css";

function Programwiz() {
  //document.getElementsByTagName("BODY")[0].style["background"] = "linear-gradient(#141e30, #243b55)";
  document.getElementsByTagName("BODY")[0].style["background"] = "#323232";
  let elem = (
    <div className="container-md">
      <div className="jumbotron shadow bg-dark text-warning pb-4 mb-4">
        <h1 className="display-2 mb-4">Programwiz</h1>
        <p className="lead"><strong>Programwiz</strong> is a competitive programming competition. This is the time to test and sharp your programming skills. Don't know where to start? 
        Go to <a href="https://www.hackerrank.com/"> Hackerrank </a> to practise competitive programming and get started. 
        Also check out <a href="."> "An introduction to competitive programming"</a>, a talk session held at BTUI'20. 
        Get ready wizards! Lets code...</p>
        <hr className="bg-light my-4" size="1" />
        <p>Click the below button to enter the competition, you will be redirected to the official competition platform.</p>
        <a type="button" className="btn btn-lg btn-block outline-warning bg-warning" href="https://www.hackerrank.com/programwiz">Enter Contest</a>
      </div>
      <div className="alert bg-transparent outline-warning text-warning" role="alert">
        <h4 className="alert-heading">This is the end of your day's adventure!</h4>
        <p className="text-warning">Aww yeah, you successfully completed the day of <strong>Programming</strong>. 
        Stay tuned with us for more talk sessions and competitions. Hope you had a lot of fun. Thank You!</p>
        <hr className="outline-warning" />
        <p className="mb-0 font-weight-lighter">Beyound The UI. A project by Royal College Computer Society.</p>
      </div>
    </div>
  );

  return elem;
}

export default Programwiz;
