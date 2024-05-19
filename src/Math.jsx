import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faLock, faCheckCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useUnityContext } from "react-unity-webgl";
import "./levels.css";

// function handleLevelCompletion(levelIndex, levelData, setLevelData, unityInstance) {
  
//   const updatedLevels = [...levelData];
//   const nextLockedLevelIndex = updatedLevels.findIndex(level => level.lock && !level.completed);
//   console.log([levelIndex]);
//   if (nextLockedLevelIndex !== -1) {
//       updatedLevels[nextLockedLevelIndex].lock = false;
//       updatedLevels[nextLockedLevelIndex - 1].completed = true;    
//   }
//   else{
//     console.warn('Cannot complete the current level because the previous level is not completed.');
//     return;
//   }

//   console.log('Updated Levels:', updatedLevels); // Debug statement


//   setLevelData(updatedLevels);

//   if (unityInstance) {
//     unityInstance.SendMessageToUnity("UnityMessageReceiver", "LevelCompleted", levelIndex);
//   }
// }



function handleLevelCompletion(levelIndex, levelData, setLevelData, unityInstance) {
  
    const updatedLevels = [...levelData];
 
   const nextLockedLevelIndex = updatedLevels.findIndex(level => level.lock && !level.completed );
    console.log([levelIndex]);
    if (nextLockedLevelIndex !== -1 ) {
        updatedLevels[nextLockedLevelIndex].lock = false;
        updatedLevels[nextLockedLevelIndex - 1].completed = true;    
    }
    else{
      console.warn('Cannot complete the current level because the previous level is not completed.');
      return;
    }
  
    console.log('Updated Levels:', updatedLevels); // Debug statement
  
  
    setLevelData(updatedLevels);
  
    if (unityInstance) {
      unityInstance.SendMessageToUnity("UnityMessageReceiver", "LevelCompleted", levelIndex);
    }
  }

function Mathh() {
  const backgroundImageStyle = {
    backgroundImage: `url("https://e0.pxfuel.com/wallpapers/81/418/desktop-wallpaper-abstract-technological-background-made-of-black-hexagons-with-purple-glow-seamless-loop-motion-background-dark-hexagon.jpg")`,
  };

  const [levelData, setLevelData] = useState([]);

  useEffect(() => {
    // Retrieve the level data from Local Storage when the component mounts
    const storedLevelData = localStorage.getItem("levelData");
    if (storedLevelData) {
      setLevelData(JSON.parse(storedLevelData));
    } else {
      // Initialize the level data if it doesn't exist in Local Storage
      const initialLevels = [];
      initialLevels.push({ id: 1, lock: false, completed: false });
      for (let i = 2; i <= 20; i++) {
        initialLevels.push({ id: i, lock: true, completed: false });
      }
      setLevelData(initialLevels);
    }
  }, []);

  useEffect(() => {
    // Store the level data in Local Storage whenever it changes
    localStorage.setItem("levelData", JSON.stringify(levelData));
  }, [levelData]);

  const [isMovingLevels, setIsMovingLevels] = useState(false);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);

  const { unityInstance } = useUnityContext();
  const moveLevelsRight = () => {
    setCurrentLevelIndex((prevIndex) => Math.min(prevIndex + 10, levelData.length - 10));
    setIsMovingLevels(true);
  };

  const moveLevelsLeft = () => {
    setCurrentLevelIndex((prevIndex) => Math.max(prevIndex - 10, 0));
    setIsMovingLevels(false);
  };

  const handleLevelCompleted = (levelIndex) => {
    handleLevelCompletion(levelIndex, levelData, setLevelData, unityInstance);
  };

  return (
    <div className="main-Math">
      <div className="main-Math-inside" style={backgroundImageStyle}>
        <div className={`level-main${isMovingLevels ? " slide-left" : " slide-right"}`}>
          {levelData.slice(currentLevelIndex, currentLevelIndex + 10).map((level, index) => (
            <InsideCard
              key={level.id}
              level={level}
              levels={levelData}
              index={currentLevelIndex + index}
              levelCompleted={handleLevelCompleted}
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
          <button className="complete-level-button" onClick={() => handleLevelCompleted(currentLevelIndex)}>
            Complete Level
          </button>
        </div>
      </div>
    </div>
  );
}

function InsideCard({ level, levels, index, levelCompleted }) {
  const backgroundImageStyle = {
    backgroundImage: `url("https://i.pinimg.com/736x/d6/fd/c8/d6fdc83f651e1c1460625cd25da61cd0.jpg")`,
  };

  // const handleClick = () => {
  //   if (!level.lock) {
  //     levelCompleted(index);
  //   }
  // };

  const isFirstLevel = index === 0;
  const isPreviousCompleted = !isFirstLevel && levels[index - 1].completed;

  const levelContent = (
    <div className="LevelClick">
      <br />
      <div className="idMath">{level.id}</div>
      {level.lock && <div className="lockMath"><FontAwesomeIcon icon={faLock} /></div>}
      {!level.lock && <div className="lockMath"><FontAwesomeIcon icon={faPlay} /></div>}
      {level.completed && <div className="endMath"><FontAwesomeIcon icon={faCheckCircle} /></div>}
      {/* {(isFirstLevel || isPreviousCompleted) && !level.completed && (
        <button className="lock1Math" onClick={handleClick}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      )} */}
    </div>
  );

  return (
    <div className="InsideCardMath" style={backgroundImageStyle}>
      {!level.lock ? (
        <Link to="/unity" style={{ textDecoration: 'none' }}>{levelContent}</Link>
      ) : (
        levelContent
      )}
    </div>
  );
}

export default Mathh;
export {handleLevelCompletion }; 