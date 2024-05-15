// import React, { useEffect } from "react";
// import { Unity, useUnityContext } from "react-unity-webgl";
// import { useNavigate } from 'react-router-dom';

// function UnityGameComponent({  handleLevelCompletion }) {
//   const { unityProvider, unityInstance } = useUnityContext({
//     loaderUrl: "./brainiac-unity/Build/brainiac-unity.loader.js",
//     dataUrl: "./brainiac-unity/Build/brainiac-unity.data",
//     frameworkUrl: "./brainiac-unity/Build/brainiac-unity.framework.js",
//     codeUrl: "./brainiac-unity/Build/brainiac-unity.wasm",
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleMessage = (event) => {
//       const { messageType, levelIndex, levelData, setLevelData, unityInstance } = event.data;
//       if (messageType === "NavigateToHome") {
//         navigate("/Math");
//       } else if (messageType === "CompleteLevel") {
//         navigate(-1);
//         handleLevelCompletion(levelIndex, levelData, setLevelData, unityInstance);
//       }
//     };

//     window.addEventListener("message", handleMessage);

//     return () => {
//       window.removeEventListener("message", handleMessage);
//     };
//   }, [navigate,handleLevelCompletion]);

//   return (
//     <div className="unity-main">
//       <div className="unity">
//         <Unity className="unity" unityProvider={unityProvider} />
//       </div>
//     </div>
//   );
// }

// export default UnityGameComponent;
import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useNavigate } from 'react-router-dom';
import { handleLevelCompletion } from './Math';

function UnityGameComponent() {
  const { unityProvider, unityInstance, sendMessageToUnity } = useUnityContext({
    loaderUrl: "./brainiac-unity/Build/brainiac-unity.loader.js",
    dataUrl: "./brainiac-unity/Build/brainiac-unity.data",
    frameworkUrl: "./brainiac-unity/Build/brainiac-unity.framework.js",
    codeUrl: "./brainiac-unity/Build/brainiac-unity.wasm",
  });

  const navigate = useNavigate();
  const [levelData, setLevelData] = useState([]);

  useEffect(() => {
    const storedLevelData = localStorage.getItem("levelData");
    if (storedLevelData) {
      setLevelData(JSON.parse(storedLevelData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("levelData", JSON.stringify(levelData));
  }, [levelData]);

  useEffect(() => {
    const handleMessage = (event) => {
      const { messageType, levelIndex } = event.data;

      if (messageType === "NavigateToHome") {
        navigate("/Math");
      } else if (messageType === "CompleteLevel") {
        navigate(-1);
          handleLevelCompletion(levelIndex, levelData, setLevelData, unityInstance);
      }
    };

    const handleUnityMessage = (event) => {
      const { messageType } = event.detail;

      if (messageType === "RequestLevelData") {
        const levelDataString = JSON.stringify(levelData);
        const setLevelDataString = setLevelData.toString();
        sendMessageToUnity("UnityMessageReceiver", "ReceiveLevelData", levelDataString, setLevelDataString);
      }
    };

    const unityMessage = new CustomEvent("unityMessage");
    document.addEventListener("unityMessage", handleUnityMessage);
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      document.removeEventListener("unityMessage", handleUnityMessage);
    };
  }, [navigate, levelData, setLevelData, sendMessageToUnity]);

  return (
    <div className="unity-main">
      <div className="unity">
        <Unity className="unity" unityProvider={unityProvider} />
      </div>
    </div>
  );
}

export default UnityGameComponent;