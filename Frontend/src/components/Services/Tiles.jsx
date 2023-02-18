import React from "react";
import './Tiles.css'

export function SquareTile({title, bg, onClick}) {
  return (
    <div className="tile__container" style={{
        background: `url(${bg})`,
      }}
      onClick={onClick}
    >
      <div className="tile__title">{title}</div>
    </div>
  );
}

export function BigHorizontalTile({title, bg}) {
  return (
    <div className="tile__container__horizontal" style={{
      background: `url(${bg})`,
    }}>
      <div className="tile__title__horizontal">{title}</div>
    </div>
  );
}

export function MediumHorizontalTile({title, bg}) {
  return (
    <div className="tile__medium" style={{
      background: `url(${bg})`,
    }}>
      <div className="tile__title__horizontal">{title}</div>
    </div>
  );
}