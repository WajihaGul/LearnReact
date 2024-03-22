import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1>Wajiha Gul</h1>
    <h2> Today is {currentDate}</h2>
    <h2>Now the Time is {currentTime} </h2>
  </>,
  document.getElementById("root")
);
