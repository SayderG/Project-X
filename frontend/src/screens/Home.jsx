import React from "react";
import Bills from "../components/Home/Bills";
import Buildings from "../components/Home/Buildings";
import { BigButton } from "../components/Home/Buttons";
import Header from "../components/Home/Header";
import Neighbours from "../components/Home/Neighbours";
import HomeInfo from "../components/Home/HomeInfo";
import Services from "../components/Home/Services";
import Stories from "../components/Home/Stories";
import TextPill from "../components/Home/TextPill";
import "./Screen.css";
import Disccussions from "../components/Home/Discussions";

export default function Home() {
  return (
    <div className="screen">
      <Header />
      <Stories/>
      <HomeInfo/>
      <Bills/>
      <BigButton text="Парковочные места"/>
      <TextPill text="Ваши услуги"/>
      <Services/>
      <Neighbours/>
      <TextPill text="Подходящие вам новостройки"/>
      <Buildings/>
      <TextPill text="Обсуждения"/>
      <Disccussions/>
    </div>
  );
}