import React from "react";
import './Promo.css'

export default function Promo() {
  return(
    <div className="promo__container">
      <div className="promo__bubbles__first">
        <svg width="49" height="68" viewBox="0 0 49 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="38" cy="57" r="11" fill="white" fill-opacity="0.5"/>
          <circle cx="17" cy="17" r="17" fill="white" fill-opacity="0.5"/>
        </svg>
      </div>
      <div className="promo__main">
        Присоединяйся и получай бонусы!  
      </div>
      <div className="promo__bubbles__second">
        <svg width="71" height="86" viewBox="0 0 71 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="28" r="11" fill="white" fill-opacity="0.5"/>
          <circle cx="45.5" cy="71.5" r="14.5" fill="white" fill-opacity="0.5"/>
          <circle cx="64.5" cy="14.5" r="14.5" fill="white" fill-opacity="0.5"/>
        </svg>
      </div>
    </div>
  )
}