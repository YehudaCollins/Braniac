import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faLock, faCheckCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import "./levels.css";

function English() {
  const backgroundImageStyle = {
    backgroundImage: `url("https://w0.peakpx.com/wallpaper/573/411/HD-wallpaper-red-hexagons-3d-art-hexagons-texture-creative-macro-honeycomb-red-hexagons-background-hexagons-textures-red-backgrounds-hexagons-patterns.jpg")`,
  };

  const levels = [];
  levels.push({ id: 1, lock: false, completed: false });
  for (let i = 2; i <= 20; i++) {
    levels.push({ id: i, lock: true, completed: false });
  }

  const [isMovingLevels, setIsMovingLevels] = useState(false);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [levelData, setLevelData] = useState(levels);

  //מזיז שלבים ימינה 
  const moveLevelsRight = () => {
    setCurrentLevelIndex((prevIndex) => Math.min(prevIndex + 10, levelData.length - 10));
    setIsMovingLevels(true);
  };

  //מזיז שלבים שמאלה
  const moveLevelsLeft = () => {
    setCurrentLevelIndex((prevIndex) => Math.max(prevIndex - 10, 0));
    setIsMovingLevels(false);
  };

  // מסיים לבל? פותח תלבל הבא 
  const levelCompleted = (levelIndex) => {
    const updatedLevels = [...levelData];
    updatedLevels[levelIndex].completed = true;
    if (levelIndex < updatedLevels.length - 1) {
      updatedLevels[levelIndex + 1].lock = false;
    }
    setLevelData(updatedLevels);
  };

  return (
    <div className="main-English">
      <div className="main-English-inside" style={backgroundImageStyle}>
        <div className={`level-main${isMovingLevels ? " slide-left" : " slide-right"}`}>
          {levelData.slice(currentLevelIndex, currentLevelIndex + 10).map((level, index) => (
            <InsideCard
              key={level.id}
              level={level}
              levels={levelData}
              index={currentLevelIndex + index}
              levelCompleted={levelCompleted}
            />
          ))}
        </div>
        <div className="navigation-buttons">
          <button className="buttonleft" onClick={moveLevelsLeft}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="buttonright" onClick={moveLevelsRight}>
            <FontAwesomeIcon className="buttonright" icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

function InsideCard({ level, levels, index, levelCompleted }) {
  const backgroundImageStyle = {
    backgroundImage: `url("https://img.freepik.com/free-vector/abstract-glowing-terrain-line-wallpaper-modern-backdrop-vector_1017-45742.jpg")`,
  };

  const handleClick = () => {
    if (!level.lock) {
      levelCompleted(index);
    }
  };

  const isFirstLevel = index === 0;
  const isPreviousCompleted = !isFirstLevel && levels[index - 1].completed;

  const levelContent = (
    <div className="LevelClick">
      <br />
      <div className="id">{level.id}</div>
      {level.lock && <div className="lock"><FontAwesomeIcon icon={faLock} /></div>}
      {!level.lock && <div className="lock"><FontAwesomeIcon icon={faPlay} /></div>}
      {level.completed && <div className="end"><FontAwesomeIcon icon={faCheckCircle} /></div>}
      {(isFirstLevel || isPreviousCompleted) && !level.completed && (
        <button className="lock1" onClick={handleClick}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      )}
    </div>
  );

  return (
    <div className="InsideCardEnglish" style={backgroundImageStyle}>
      {!level.lock ? (
        <Link to="/unity" style={{ textDecoration: 'none' }}>{levelContent}</Link>
      ) : (
        levelContent
      )}
    </div>
  );
}

export default English;