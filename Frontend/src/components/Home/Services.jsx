import React from "react";
import './Services.css'
import bubbles from '../../assets/bubbles.svg'
import paw from '../../assets/paw.svg'

function Service({ title, description, icon, color }) {
  return(
    <div className={"service__container " + color}>
      <div className="service__text__container">
        <div className="service__title">
          {title}
        </div>
        <div className="service__description">
          {description}
        </div>
      </div>
      <div className="service__icon">
          <img src={icon} alt="icon" />
        </div>
    </div>
  )
}

export default function Services() {
  return(
    <div className="services__container">
      <Service 
        title="Клининг"
        description="19.03 в 17:00"
        icon={bubbles}
        color="blue"
      />
      <Service 
        title="Выгул собаки"
        description="19.03 в 17:00"
        icon={paw}
        color="green"
      />
    </div>
  )
}