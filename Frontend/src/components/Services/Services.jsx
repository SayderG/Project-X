import React from "react";
import cleanTile from "../../assets/clean_tile.svg";
import boxTile from "../../assets/box_tile.svg";
import goodsTile from "../../assets/mock/images/products.png"
import garbageTile from "../../assets/mock/images/garbage.png"
import childen from "../../assets/mock/images/child.png"
import { SquareTile, BigHorizontalTile, MediumHorizontalTile } from "./Tiles";
import { useDispatch } from "react-redux";
import { setScreen } from '../../store/appStore'
import "./Services.css";

export default function Services() {
  const dispatch = useDispatch()
  return (
    <div className="services_tiles_container">
      <div className="fristrow__container">
        <div className="lefttwo__container"> 
          <SquareTile
            title={"Клининг"}
            bg={cleanTile}
            onClick={() => dispatch(setScreen(1))}
          />
          <SquareTile
            title={"Доставка продуктов"}
            bg={goodsTile}
          />
        </div>
        <div className="rightone__container">
          <BigHorizontalTile
            title={"Выбросить мусор"}
            bg={garbageTile}
          />
        </div>
      </div>
      <div className="secondrow__container">
        <MediumHorizontalTile
          title={"Отвести ребенка в сад"}
          bg={childen}
        />
        <MediumHorizontalTile
          title={"Поднять вещи"}
          bg={boxTile}
        />
      </div>
    </div>
  )
}