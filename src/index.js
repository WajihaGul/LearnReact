import React from "react";
import ReactDOM from "react-dom";
import { Sub, Sum, Division, Product } from "./Calc";
import "./index.css";

ReactDOM.render(
  <>
    <div>
      <ul>
        <li>Addition of a and b is {Sum(10, 20)}</li>
        <li>Subtraction of a and b is {Sub(30, 20)}</li>
        <li>Division of a and b is {Division(300, 20)}</li>
        <li>Product of a and b is {Product(10, 20)}</li>
      </ul>
    </div>
  </>,
  document.getElementById("root")
);
