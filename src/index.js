import React from "react";
import ReactDOM from "react-dom";

const myName = "Wajiha Gul";
const img1 = "https://picsum.photos/id/1/200/300";
const img2 = "https://picsum.photos/id/1/250/300";
const img3 = "https://picsum.photos/id/1/300/300";
const link = "https://chat.openai.com/c/ae134569-d390-4485-aa00-0a712b65b144";

ReactDOM.render(
  <>
    <h1 contentEditable="true"> My Name is {myName}</h1>
    <p>Uploading Random Images</p>
    <img src={img1} alt="Random Image 1" />
    <img src={img2} alt="Random Image 2" />

    <a href={link} target="_blank">
      <img src={img3} alt="Random Image 3" />
    </a>
  </>,
  document.getElementById("root")
);
