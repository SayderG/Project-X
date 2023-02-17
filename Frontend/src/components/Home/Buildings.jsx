import React from "react";
import './Buildings.css'
import building1 from '../../assets/mock/images/building1.png'
import building2 from '../../assets/mock/images/building2.png'

function Building({
  image,
  pill,
  price
}) {
  return(
    <div className="building__container">
      <div className="buildings__image">
       <img src={image} alt="building" width='143px' height='96px'/> 
      </div>
      <div className="buildings__pill">
        {pill}
      </div>
      <div className="buildings__price">
      от {price} ₽
      </div>
    </div>
  )
}

export default function Buildings() {
  return(
    <div className="buildings__container">
      <Building
        image={building1}
        pill="ЖК «Дизайнеры»"
        price="4 333 500"
      />
      <Building
        image={building2}
        pill="ЖК «Бекендеры»"
        price="от 5 002 133"
      />
    </div>
  )
}