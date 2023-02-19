import React from "react";
import chevron from '../../assets/chevron.svg'
import './Accounting.css'

export default function Accounting() {
  return <div className="accounting__container">
    <div className="accounting__stack">
      <div className="accounting__top">
      Приборы учета
      </div>
      <div className="accounting__bottom">
      Показания переданы 18 февраля
      </div>
    </div>
    <div className="accounting__button">
      <img src={chevron} alt="chevron"/>
    </div>
  </div>;
}