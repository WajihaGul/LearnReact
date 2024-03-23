import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
1. Create a React App 
2. Show a heading that says Hello Sir, Good Morning,        
    if time is between 1 to 11 am
3. Good Afternoon if 12 PM to 7 PM
4. Good Night, if 7 PM till midnight
5. Apply inline CSS Style
*/
const cssStyle = {};
const timeNow = new Date().getHours();
if (timeNow > 1 && timeNow <= 11) {
  var greet = "Good Morning";
  cssStyle.color = "red";
} else if (timeNow >= 12 && timeNow <= 18) {
  var greet = "Good Afternoon";
  cssStyle.color = "Green";
} else {
  var greet = "Good Night";
  cssStyle.color = "Orange";
}
ReactDOM.render(
  <>
    <div>
      <h1 className="greeth1">
        HELLO SIR, <span style={cssStyle}> {greet}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
