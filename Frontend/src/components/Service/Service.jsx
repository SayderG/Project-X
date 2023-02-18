import React from "react";
import './Service.css';

export default function Service({ service }) {
  return (
    <div className="service__container">
      <div className="service__name">{service.name}:</div>
      <p>{service.description}</p>
    </div>
  );
}