import React from "react";
import cleanTile from "../../assets/clean_tile.svg";
import boxTile from "../../assets/box_tile.svg";
import petsTile from "../../assets/pets_tile.svg";
import goodsTile from "../../assets/mock/images/products.png"
import garbageTile from "../../assets/mock/images/garbage.png"
import childen from "../../assets/mock/images/child.png"
import { SquareTile, BigHorizontalTile, MediumHorizontalTile } from "./Tiles";
import { useDispatch } from "react-redux";
import { setService } from '../../store/serviceStore'
import { setScreen } from "../../store/appStore";
import "./Services.css";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const services = {
    cleaning: {
      title: "Клининг",
      companies: [
        "Экспресс",
        "Домашний",
        "Добрый",
      ],
      description: "Выберите дни недели в которые мы будем наводить порядок у вас дома",
      tip: "Мы рекомендуем убираться хотя бы 1 раз в неделю",
      price: 2000,
    },
    garbage: {
      title: "Выбросить мусор",
      companies: [
        "Чистый дом",
        "Два Ивана",
        "Щука",
      ],
      description: "Выберите дни недели, в которые мы будем забирать мусор у вас дома",
      tip: "Если у вас есть животные, убирайте мусор чаще, так как это поможет предотвратить распространение бактерий и запахов",
      price: 500,
    },
    delivery: {
      title: "Доставка продуктов",
      companies: [
        "Пятерочка",
        "24 часа",
        "RED"
      ],
      description: "Выберите время для доставки продуктов",
      tip: "Планируйте заказы продуктов заранее, чтобы избежать задержек в доставке и не оставаться без нужных продуктов",
      price: 'от 200',
    },
    pets: {
      title: "Выгулять собаку",
      companies: [
        "Лучший друг",
        "Собачьи приключения",
        "Счастливая лапа"
      ],
      description: "Выберите дни недели, в которые мы будем выгуливать вашу собаку",
      tip: "Выгул собаки поможет вашему питомцу оставаться в форме и сберечь здоровье",
      price: 500,
    },
    kids: {
      title: "Отвести ребенка в сад",
      companies: [
        "В надежных рука",
        "Лапочка",
        "Счастливый день"
      ],
      description: "Выберите дни недели, в которые мы будем отвозить вашего ребенка в сад",
      tip: "Отвоз ребенка в сад поможет вам сэкономить время и силы",
      price: 500,
    },
    box: {
      title: "Поднять вещи",
      companies: [
        "Спецтехника",
        "Бояре",
        "Точно в срок"
      ],
      description: "Выберите время, в которые мы поднимем вещи на этаж",
      tip: "Если вы не можете поднять тяжелый предмет самостоятельно, не стесняйтесь заказать услуги грузчиков, которые помогут поднять вещи на нужный этаж",
      price: 500,
    },
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="services_tiles_container">
      <div className="fristrow__container">
        <div className="lefttwo__container"> 
          <SquareTile
            title={"Клининг"}
            bg={cleanTile}
            onClick={() => {
              dispatch(
                setService(services.cleaning)
              )
              navigate('/service')
            }}
          />
          <SquareTile
            title={"Доставка продуктов"}
            bg={goodsTile}
            onClick={() => {
              dispatch(
                setService(services.delivery)
              )
              navigate('/service')
            }}
          />
        </div>
        <div className="rightone__container">
          <BigHorizontalTile
            title={"Выбросить мусор"}
            bg={garbageTile}
            onClick={() => {
              dispatch(
                setService(services.garbage)
              )
              navigate('/service')
            }}
          />
        </div>
      </div>
      <div className="middle__tile" style={{
        background: `url(${petsTile})`,
      }}
        onClick={() => {
          dispatch(
            setService(services.pets)
          )
          navigate('/service')
        }}
      >
        <div className="tile__title__horizontal">Выгулять собаку</div>
      </div>
      <div className="secondrow__container">
        <MediumHorizontalTile
          title={"Отвести ребенка в сад"}
          bg={childen}
          onClick={() => {
            dispatch(
              setService(services.kids)
            )
            navigate('/service')
          }}
        />
        <MediumHorizontalTile
          title={"Поднять вещи"}
          bg={boxTile}
          onClick={() => {
            dispatch(
              setService(services.box)
            )
            navigate('/service')
          }}
        />
      </div>
    </div>
  )
}