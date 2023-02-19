import React from "react";
import "./Buttons.css";
import arrow from "../../assets/arrow.svg";
import smArrow from "../../assets/sm_arrow.svg";

function BigButton({ text, onClick }) {
  return(
    <button className="bigButton" onClick={onClick}>
      {text} <img src={arrow} alt="arrow"/>
    </button>
  )
}

function SmallButton({ text, onClick }) {
  return(
    <button className="smallButton" onClick={onClick}>
      {text} <img src={smArrow} alt="arrow"/>
    </button>
  )
}

export {
  BigButton,
  SmallButton
}