import React from "react";
import Header from "../components/Service/Header";
import { useNavigate } from "react-router";
import "./Parking.css";
import parkingMock from '../assets/parking_mock.svg'

export default function Parking(){
  const navigate = useNavigate();
  return (
    <div className="screen">
      <Header text="Парковка" onClick={
        () => navigate('/')
      }/>
      <div className="parking__pill">
      36 свободных мест
      </div>
      <div className="parking__container">
        <img src={parkingMock} alt="parkingMock" className="parking__mock"/>
      </div>
    </div>
  )
}