import React from "react";
import { SmallButton } from "./Buttons";
import './Neighbours.css'
import neighbours from '../../assets/nei.svg'

export default function Neighbours() {
  return(
    <div className="neighbours__container">
      <div className="neighbours__top">
        <div className="neighbours__title">
          Соседи
        </div>
        <SmallButton text={"Присоедениться"}/>
      </div>
      <div className="neighbours__bottom">
        <div className="neighbours__list">
          <img src={neighbours} alt="neighbours"/>
        </div>
        <div className="neighbours__more">
          Еще 56
        </div>
      </div>
    </div>
  )
}