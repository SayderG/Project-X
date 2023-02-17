import React from "react";
import './Header.css'
import chevron from '../../assets/chevron_left.svg'

export default function Header() {
  return (
    <div className="services__header__container">
      <div className="services__header__chevron">
        <img src={chevron} alt="chevron" />
      </div>
      <div className="services__header__text">
      Услуга
      </div>
    </div>
  )
}