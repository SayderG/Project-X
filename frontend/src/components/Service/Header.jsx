import React from "react";
import './Header.css'
import chevron from '../../assets/chevron_left.svg'
import { useDispatch } from "react-redux";
import { setScreen } from '../../store/appStore'

export default function Header({text, isMain, onClick}) {
  const dispatch = useDispatch()
  return (
    <div className="services__header__container">
      {
        !isMain && (
          <div className="services__header__chevron" onClick={() => {
            if (onClick) {
              onClick()
            } else {
              dispatch(setScreen(0))
            }
          }}>
            <img src={chevron} alt="chevron" />
          </div>
        )
      }
      <div className="services__header__text">
      {text}
      </div>
    </div>
  )
}