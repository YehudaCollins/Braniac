import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useContext } from 'react';
import { LevelContext } from '../components/LevelContext';

function UnityDemo() {
  const { levelIndex } = useContext(LevelContext);

  const { unityProvider, sendMessage, isLoaded } = useUnityContext({
    loaderUrl: "./brainiac-unity/Build/brainiac-unity.loader.js",
    dataUrl: "./brainiac-unity/Build/brainiac-unity.data",
    frameworkUrl: "./brainiac-unity/Build/brainiac-unity.framework.js",
    codeUrl: "./brainiac-unity/Build/brainiac-unity.wasm",
  });

  const handleRedClick = () => {
    console.log("Red button clicked. Unity loaded:", isLoaded);
    if (isLoaded) {
      sendMessage("JavascriptHook", "TintRed");
    } else {
      console.error("Unity is not loaded yet.");
    }
  };

  const handleGreenClick = () => {
    console.log("Green button clicked. Unity loaded:", isLoaded);
    if (isLoaded) {
      sendMessage("JavascriptHook", "TintGreen");
    } else {
      console.error("Unity is not loaded yet.");
    }
  };
  const handleStringClick = () => {
    if (isLoaded) {
      sendMessage("JavascriptHook", "SetNumber", 56);
    }
  };

  const handleNumberClick = () => {
    if (isLoaded) {
      sendMessage("JavascriptHook", "SetString", "{levelIndex}");
      console.log({levelIndex});
    }
  };

  return (
    <div className="unity-main">
      <div className="hhh">
        <button
          style={{
            backgroundColor: "red",
            color: "white",
          }}
          onClick={handleRedClick}
        >
          RED
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
          }}
          onClick={handleGreenClick}
        >
          GREEN
        </button>

        <button
          style={{
            backgroundColor: "green",
            color: "white",
          }}
          onClick={handleNumberClick}
        >
          Number
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
          }}
          onClick={handleStringClick}
        >
          String
        </button>
      </div>

      <div>
        <Unity className="unity" unityProvider={unityProvider} />
      </div>
    </div>
  );
}

export default UnityDemo;