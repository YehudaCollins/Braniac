// import React from "react";
// import './card.css';

// function Card({ card }) {

  
//   const getGlowClass = () => {
//     switch (card.color) {
//       case "golden":
//         return "golden-glow";
//       case "blue":
//         return "blue-glow";
//       case "green":
//         return "green-glow";
//       default:
//         return "";
//     }
//   };
//   return (
//     <div>
//     <div className={`mainCard ${getGlowClass()}`}>
//         <img src={card.imageUrl} alt={card.name} />
//       </div>
//       <h1 className="text1">{card.name}</h1>  
//     </div>
//   );
// }
// export default Card;

   

import React from "react";
import { Link } from "react-router-dom";
import './card.css';

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
        <img src={card.imageUrl} alt={card.name} />
      </Link>
      <h1 className="text1">{card.name}</h1>
      </div>
    </div>
  );
}

export default Card;
