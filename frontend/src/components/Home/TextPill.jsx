import React from "react";
import './TextPill.css'

export default function TextPill({ text, onClick }) {
  return (
    <div className="pill__container" onClick={onClick}>
      <div className="pill__text">
        {text}
      </div>
    </div>
  );
}