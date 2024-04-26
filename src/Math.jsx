import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,faLock } from '@fortawesome/free-solid-svg-icons';
import "./levels.css";



function Mathh() {
  const backgroundImageStyle = {
    backgroundImage: `url("https://e0.pxfuel.com/wallpapers/81/418/desktop-wallpaper-abstract-technological-background-made-of-black-hexagons-with-purple-glow-seamless-loop-motion-background-dark-hexagon.jpg")`,
  };

  const levelsMath = [];
  for (let i = 1; i <= 20; i++) {
    levelsMath.push({ id: i, lock: false });
  }

  const [MovelLevel, setMovelLevel] = useState(false);
  const [levelLocation, setLevelLocation] = useState(0);

  const buttonRight = () => {
    setLevelLocation((prevIndex) => Math.min(prevIndex + 10, levelsMath.length - 10));
    setMovelLevel(true);
  };

  const buttonleft = () => {
    setLevelLocation((prevIndex) => Math.max(prevIndex - 10, 0));
    setMovelLevel(false);
  };
  
  return (
    <div className="main-Math">
      <div className="main-Math-inside" style={backgroundImageStyle}>
        <div className={`level-main${MovelLevel ? " slide-left" : " slide-right"}`}>
          {levelsMath.slice(levelLocation, levelLocation + 10).map((levelsMath) => (
            <InsideCardEnglish key={levelsMath.id} levelsMath={levelsMath} />
          ))}
        </div>
        <div className="navigation-buttons">
          <button className="buttonleft" onClick={buttonleft}>
          <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="buttonright" onClick={buttonRight}>
          <FontAwesomeIcon className="buttonright" icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  ); 
}

function InsideCardEnglish({ levelsMath }) {
  const backgroundImageStyle = {
    backgroundImage: `url("https://i.pinimg.com/736x/d6/fd/c8/d6fdc83f651e1c1460625cd25da61cd0.jpg")`,
  };
  return (
    <div className="InsideCardMath" style={backgroundImageStyle}>
      <br></br>
      <div className="idMath">{levelsMath.id}</div>
      <div className="lockMath"><FontAwesomeIcon icon={faLock} /></div>
       {/* Lock: {levelEnglis.lock.toString()} */}
    </div>
  );
}

export default Mathh;
