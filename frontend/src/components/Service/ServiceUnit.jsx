import React from "react";
import "./Service.css";
import './ServiceUnit.css'




export default function ServiceUnit({service}) {
  const [selectedCompany, setSelectedCompany] = React.useState(0);
  return (
    <div className="serviceunit__container">
      <div className="serviceunit__title">{service.title}:</div>
      <select className="serviceunit__select" placeholder="Выбрать фирму" value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
        {
          service.companies.map((company, index) => {
            return (
              <option key={index} value={index}>{company}</option>
            )
          })
        }
      </select>
      <SelectDayUnit
        description={service.description}
        tip={service.tip}
      />
      <hr style={{
        border: "1px solid #E7EAEE",
        width: "80%",
      }}/>
      <div className="serviceunit__description__container">
        <div className="serviceunit__description__remindme">
          <div className="remindme__left">
          Напомнить мне
          </div>
          <div className="remindme__right">
            <select className="remindme__select">
              {
                Array.from(Array(24).keys()).map((hour, index) => {
                  return (
                    <option key={index} value={hour}>{(hour.legth === 1) ? (
                      "0" + hour
                   ) : (
                      hour
                   )}:00</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className="serviceunit__description__price">
          <div className="price__left">
            Цена
          </div>
          <div className="price__right">
            {service.price} руб.
          </div>
        </div>
      </div>
      <button className="serviceunit__add">
        Добавить
      </button>
    </div>
  );
}