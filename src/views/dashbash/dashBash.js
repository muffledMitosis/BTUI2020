import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../programmingweek.css";

function Dashbash() {
  document.getElementsByTagName("BODY")[0].style["background"] = "#323232";
  let elem = (
    <div className="container-md">
      <div className="jumbotron shadow bg-dark text-aqua pb-4 mb-4">
        <h1 className="display-2 mb-4">Dash-Bash</h1>
        <p className="lead"><strong>Dash-Bash</strong> is a challenge on creating the best Flutter app. This is the time to test and sharp your Flutter skills. Don't know where to start? 
        Go to official <a href="https://flutter.dev/docs/get-started/install"> Flutter Docs </a> to get started. 
        Also check out <a href="."> "Get onboard with app development with Flutter"</a>, a talk session held at BTUI'20. Get ready folks! Lets Flutter...</p>
        <hr className="bg-light my-4" size="1" />
        <h5 className="text-light">Challenge Rules & Instructions,</h5>
        <ol className="text-monospace rules">
          <li>Submission made by a registered user will only be considered as a valid submission.</li>
          <li>Submit only the <code className="code-code">main.dart</code> file of your Flutter project. Make sure you include all your code within it.</li>
          <li>The app can only consist a maximum of 3 pages. Refrain using other packages. Use only widgets provided by Flutter.</li>
          <li>The best app will be selected from the design, concept, architecture and responsivity.</li>
        </ol>
        <p>Click the below button to submit your main.dart file.</p>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text outline-aqua bg-aqua text-dark" id="inputFileAddon">Submit</span>
          </div>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputFile" aria-describedby="inputFileAddon" />
            <label className="custom-file-label outline-aqua" for="inputFile">main.dart file</label>
          </div>
        </div>
      </div>
      <div className="alert bg-transparent outline-aqua text-aqua" role="alert">
        <h4 className="alert-heading">This is the end of your day's adventure!</h4>
        <p className="text-aqua">Aww yeah, you successfully completed the day of <strong>App Development with Flutter</strong>. 
        Stay tuned with us for more talk sessions and competitions. Hope you had a lot of fun. Thank You!</p>
        <hr className="outline-aqua" />
        <p className="mb-0 font-weight-lighter">Beyound The UI. A project by Royal College Computer Society.</p>
      </div>
    </div>
  );

  return elem;
}

export default Dashbash;
