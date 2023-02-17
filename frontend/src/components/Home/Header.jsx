import React from "react";
import { useState } from "react";
import "./Header.css";
import img from "../../assets/mock/images/imgh.png";

export default function Home() {
  const [userName, setUserName] = useState("Марина");
  const [image, setImage] = useState("img.png");
  return (
    <div className="home__header__container">
      <div className="home_header_text_container">
        <div className="home__header__welcome">
          Привет, {userName}!
        </div>
        <div className="home__header__description">
          Добро пожаловать в <span className="home__header__description__linklike">Соседи</span>
        </div>
      </div>
      <img className="home__header__image" src={img} alt="img" />
    </div>
  );
}