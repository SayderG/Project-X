import React from "react";
import { SmallButton } from "./Buttons";
import './Neighbours.css'
import neighbours from '../../assets/nei.svg'
import { useNavigate } from "react-router";

export default function Neighbours() {
  const navigate = useNavigate();
  return(
    <div className="neighbours__container">
      <div className="neighbours__top">
        <div className="neighbours__title">
          Соседи
        </div>
        <SmallButton text={"Присоедениться"} onClick={() => navigate('/chat')}/>
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