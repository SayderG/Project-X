import React from "react";
import "./InfoContainer.css";
import img from "../../assets/mock/images/imgh.png";
import place from '../../assets/place.svg'

export default function InfoContainer() {
  return(
    <div className="profile__infocontainer">
      <div className="profile__infocontainer__top">
        <div className="profile__infocontainer__left">
          <div className="profile__infocontainer__name">
            Марина Омельченко
          </div>
          <div className="profile__infocontainer_active_usr">
            Активный пользователь
          </div>
        </div>
        <div className="profile__infocontainer__pic">
          <img src={img} alt="profile pic" className="profile__infocontainer__pic__img" />
          <div className="online_dot">

          </div>
        </div>
      </div>
      <div className="profile__infocontainer__bottom">
      <div className="homeinfo__bottom">
        <div className="homeinfo__place">
            <img src={place} alt="place"/>
          </div>
          <div className="homeinfo__address">
          г. Краснодар, ул. Стасова, 26
          </div>
        </div>
      </div>

    </div>
  )
}