import React, { useState } from "react";
import "./English.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,faLock } from '@fortawesome/free-solid-svg-icons';


function English() {
  const backgroundImageStyle = {
    backgroundImage: `url("https://w0.peakpx.com/wallpaper/573/411/HD-wallpaper-red-hexagons-3d-art-hexagons-texture-creative-macro-honeycomb-red-hexagons-background-hexagons-textures-red-backgrounds-hexagons-patterns.jpg")`,
  };

  const levelsEnglish = [];
  for (let i = 1; i <= 20; i++) {
    levelsEnglish.push({ id: i, lock: false });
  }

  const [showNextSet, setShowNextSet] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSet = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 10, levelsEnglish.length - 10));
    setShowNextSet(true);
  };

  const handlePrevSet = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 10, 0));
    setShowNextSet(false);
  };

  return (
    <div className="main-English">
      <div className="main-English-inside" style={backgroundImageStyle}>
        <div className={`level-english${showNextSet ? " slide-left" : " slide-right"}`}>
          {levelsEnglish.slice(currentIndex, currentIndex + 10).map((levelEnglis) => (
            <InsideCardEnglish key={levelEnglis.id} levelEnglis={levelEnglis} />
          ))}
        </div>
        <div className="navigation-buttons">
          <button className="buttonleft" onClick={handlePrevSet}>
          <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="buttonrite" onClick={handleNextSet}>
          <FontAwesomeIcon className="buttonrite" icon={faChevronRight} />
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
