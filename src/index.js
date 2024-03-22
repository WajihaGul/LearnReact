import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const myName = "Wajiha Gul";
const img1 = "https://picsum.photos/id/1/200/300";
const img2 = "https://picsum.photos/id/1/250/300";
const img3 = "https://picsum.photos/id/1/300/300";

ReactDOM.render(
  <>
    <h1 className="textColor"> My Name is {myName}</h1>
    <p className="textPColor">Uploading Random Images</p>
    <div className="divImg">
      <img src={img1} alt="Random Image 1" />
      <img src={img2} alt="Random Image 2" />
      <img src={img3} alt="Random Image 3" />
    </div>
  </>,
  document.getElementById("root")
);
