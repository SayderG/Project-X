import React from "react";
import mdiCalendar from '../../assets/mdi_calendar.svg'
import './PowerConsumption.css'
import pcMock from '../../assets/pc_mock.svg'

export default function PowerConsumption() {
  const [activePeriod, setActivePeriod] = React.useState(0)
  return(
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
        </div>
        <div className="powcons__date__pills__container">
          <div 
            className={`powcons__date__pill ${activePeriod === 0 ? 'powcons__date__pill__active' : ''}`}
            onClick={() => setActivePeriod(0)}
          >
          День
          </div>
          <div 
            className={`powcons__date__pill ${activePeriod === 1 ? 'powcons__date__pill__active' : ''}`}
            onClick={() => setActivePeriod(1)}
          >
          Неделя
          </div>
          <div 
            className={`powcons__date__pill ${activePeriod === 2 ? 'powcons__date__pill__active' : ''}`}
            onClick={() => setActivePeriod(2)}
          >
          Месяц
          </div>
          <div 
            className={`powcons__date__pill ${activePeriod === 3 ? 'powcons__date__pill__active' : ''}`}
            onClick={() => setActivePeriod(3)}
          >
          Год
          </div>
        </div>
        <div className="powcons__main">
          <img src={pcMock} alt="pc_mock"/>
        </div>
        <div style={{
          paddingBottom: "14px"
        }}>
        <span className="powcons__total__cons">68.43 </span><span style={{color: "white"}}>кВТ/ч</span>
        </div>
      </div>
  )
}