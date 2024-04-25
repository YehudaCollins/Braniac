import React, { useState } from "react";
import "./English.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function English() {
  const backgroundImageStyle = {
    backgroundImage: `url("https://st4.depositphotos.com/4874705/24906/i/450/depositphotos_249066518-stock-photo-dark-red-hexagon-background-and.jpg")`,
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
  return (
    <div className="InsideCardEnglish">
      ID: {levelEnglis.id}, Lock: {levelEnglis.lock.toString()}
    </div>
  );
}


export default English;
