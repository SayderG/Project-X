import React from "react";
import './HomeInfo.css'
import mdiCalendar from '../../assets/mdi_calendar.svg'
import spark from '../../assets/spark.svg'
import fork from '../../assets/fork.svg'
import chevron from '../../assets/chevron.svg'
import place from '../../assets/place.svg'

function PowerConsumptionUnit({icon, kwHour, desc}) {
  return (
    <div className="powcons__unit__container">
      <div className="powcons__unit__icon">
        <img src={icon} alt="icon"/>
      </div>
      <div className="powcons__unit__text">
        <div className="powcons__unit__text__kw">
          {kwHour} кВт / ч
        </div>
        <div className="powcons__unit__text__desc">
          {desc}
        </div>
      </div>
    </div>
  )
}

export default function HomeInfo() {
  return (
    <div className="homeinfo__container">
      <div className="homeinfo__top">
        <div className="homeinfo__title">
        Ваша квартира
        </div>
        <div className="homeinfo__chevron">
          <img src={chevron} alt="chevron"/>
        </div>
      </div>
      <div className="homeinfo__bottom">
        <div className="homeinfo__place">
          <img src={place} alt="place"/>
        </div>
        <div className="homeinfo__address">
        г. Краснодар, ул. Стасова, 26
        </div>
      </div>
      
      <div className="powcons__container">
        <div className="powcons__pill">
          <div className="powcons__pill__title">
            Расход энергии
          </div>
          <div className="powcons__pill__date">
            <div className="date__icon">
              <img src={mdiCalendar} alt="calendar"/>
            </div>
            <div className="date__text">
            19 янв, 2023
            </div>
          </div>
        </div>
        <div className="powcons__units__container">
          <PowerConsumptionUnit icon={spark} kwHour='31.7' desc="Сегодня"/>
          <PowerConsumptionUnit icon={fork} kwHour='496.7' desc="В течении месяца"/>
        </div>
      </div>
    </div>

  )
}