import React from "react";
import "./installapp.css";
import ios from "../assets/images/180ae7a0bcf7.png";
import anroid from "../assets/images/e9cd846dc748.png"

function InstallApp() {
  return (
    <div className="container">
      <div className="block_3">
        <div className="top">Get the app.</div>
        <div className="bottom">
          <div><a href="/"><img src={ios} alt="ios" /></a></div>
          <div><a href="/"><img src={anroid} alt="anroid" /></a></div>
        </div>
      </div>
    </div>
  );
}

export default InstallApp;
