import React from "react";
import { BigButton } from "../components/Home/Buttons";
import Header from "../components/Home/Header";
import InfoContainer from "../components/Profile/InfoContainer";
import './Screen.css'
import './Profile.css'
import PowerConsumption from "../components/Profile/PowerConsumtion";
import Accounting from "../components/Profile/Accounting";
import TextPill from "../components/Home/TextPill";
import Services from "../components/Home/Services";
import Promo from "../components/Profile/Promo";
import promoImg from '../assets/mock/images/promo.png'
import { useNavigate } from "react-router";

export default function Profile() {
  const navigate = useNavigate();
  return(
    <div className="screen profile__screen">
      <Header welcomeMessage={"Ваш профиль"} />
      <InfoContainer/>
      <BigButton text="Парковочные места" onClick={() => navigate('/parking')}/>
      <PowerConsumption/>
      <Accounting/>
      <TextPill text="Ваши услуги"/>
      <Services/>
      <Promo/>
      <img src={promoImg} alt="promo" className="promo__after"/>
    </div>
  )
}