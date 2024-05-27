import React from "react";
import { Link } from "react-router-dom";
import '../style/card.css';

function Card({ card }) {
  const getGlowClass = () => {
    switch (card.color) {
      case "golden":
        return "golden-glow";
      case "blue":
        return "blue-glow";
      case "green":
        return "green-glow";
      default:
        return "";
    }
  };

  const getPageLink = () => {
    switch (card.name) {
      case "Math":
        return "/Math";
      case "English":
        return "/English";
      case "shapes":
        return "/Shapes";
      default:
        return "/";
    }
  };

  return ( 
    <div>
      <div className={`mainCard ${getGlowClass()}`}>
      <Link to={getPageLink()}>
      <h1 className="text1">{card.name}</h1>
        <img src={card.imageUrl} alt={card.name} />
      </Link>
      
      </div>
      
    </div>
  );
}

export default Card;
