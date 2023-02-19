import React from "react";
import { useState } from "react";
import "./Header.css";
import img from "../../assets/mock/images/imgh.png";

export default function Home({welcomeMessage}) {
  const [userName, setUserName] = useState("Марина");
  if (!welcomeMessage) {
    welcomeMessage = `Привет, ${userName}!`;
  }
  return (
    <div className="home__header__container">
      <div className="home_header_text_container">
        <div className="home__header__welcome">
          {welcomeMessage}
        </div>
        <div className="home__header__description">
          Добро пожаловать в <span className="home__header__description__linklike">Соседи</span>
        </div>
      </div>
      <img className="home__header__image" src={img} alt="img" />
    </div>
  );
}