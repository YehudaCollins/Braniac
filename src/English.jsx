import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,faLock } from '@fortawesome/free-solid-svg-icons';
import "./levels.css";


function English() {
  const backgroundImageStyle = {
    backgroundImage: `url("https://w0.peakpx.com/wallpaper/573/411/HD-wallpaper-red-hexagons-3d-art-hexagons-texture-creative-macro-honeycomb-red-hexagons-background-hexagons-textures-red-backgrounds-hexagons-patterns.jpg")`,
  };

  const levelsEnglish = [];
  for (let i = 1; i <= 20; i++) {
    levelsEnglish.push({ id: i, lock: false });
  }

  const [MovelLevel, setMovelLevel] = useState(false);
  const [levelLocation, setLevelLocation] = useState(0);

  const buttonRight = () => {
    setLevelLocation((prevIndex) => Math.min(prevIndex + 10, levelsEnglish.length - 10));
    setMovelLevel(true);
  };

  const buttonleft = () => {
    setLevelLocation((prevIndex) => Math.max(prevIndex - 10, 0));
    setMovelLevel(false);
  };

  return (
    <div className="main-English">
      <div className="main-English-inside" style={backgroundImageStyle}>
        <div className={`level-main${MovelLevel ? " slide-left" : " slide-right"}`}>
          {levelsEnglish.slice(levelLocation, levelLocation + 10).map((levelEnglis) => (
            <InsideCardEnglish key={levelEnglis.id} levelEnglis={levelEnglis} />
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

function InsideCardEnglish({ levelEnglis }) {
  const backgroundImageStyle = {
    backgroundImage: `url("https://img.freepik.com/free-vector/abstract-glowing-terrain-line-wallpaper-modern-backdrop-vector_1017-45742.jpg")`,
  };
  return (
    <div className="InsideCardEnglish" style={backgroundImageStyle}>
      <br></br>
      <div className="id">{levelEnglis.id}</div>
      <div className="lock"><FontAwesomeIcon icon={faLock} /></div>
       {/* Lock: {levelEnglis.lock.toString()} */}
    </div>
  );
}


export default English;
