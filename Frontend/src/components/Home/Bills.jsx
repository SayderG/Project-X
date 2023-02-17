import React from "react";
import './Bills.css';
import coins from '../../assets/coins.svg'

function Bill({
  paid,
  header,
  price,
}) {
  return(
    <div className="bill__container">
      {
        (paid) ? (
          <div className="bill__state__paid">
            оплачен
          </div>
        ) : (
          <div className="bill__state__not__paid">
            не оплачен
          </div>
        )
      }
      {
        (paid) ? (
          <div className="bill__icon">
            <img src={coins} alt="coins"/>
          </div>
        ) : (
          <div className="bill__icon__not__paid bill__icon">
            <img src={coins} alt="coins"/>
          </div>
        )
      }
      <div className="bill__text">
        <div className="bill__header">
          {header}
        </div>
        <div className="bill__price">
          {price} ₽
        </div>
      </div>
    </div>
  )
}

export default function Bills() {
  return (
    <div className="bills__container">
      <Bill
        paid={false}
        header="Квартплата"
        price="1000"
      />
      <Bill
        paid={true}
        header="Квитанция за январь"
        price="4800"
      />
    </div>
  )
}