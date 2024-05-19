// import React from "react";
// import { Unity, useUnityContext } from "react-unity-webgl";

// function H() {
//   const { unityProvider} = useUnityContext({
//     loaderUrl: "./brainiac-unity/Build/brainiac-unity.loader.js",
//     dataUrl: "./brainiac-unity/Build/brainiac-unity.data",
//     frameworkUrl: "./brainiac-unity/Build/brainiac-unity.framework.js",
//     codeUrl: "./brainiac-unity/Build/brainiac-unity.wasm",
//   });



//   return (
   
//     <div className="unity-main">
//       var unityInstance = UnityLoader.instantiate("unityContainer", "Build/_Build.json", {onProgress: UnityProgress});

//     <div style="border: solid 1px black; width: 200px; height: 30px; margin: auto; text-align: center" onclick="unityInstance.SendMessage('JavascriptHook', 'TintRed')">RED</div>
//     <div style="border: solid 1px black; width: 200px; height: 30px; margin: auto; text-align: center" onclick="unityInstance.SendMessage('JavascriptHook', 'TintGreen')">GREEN</div>


//       <div>
//         <Unity className="unity" unityProvider={unityProvider} />
//       </div>
//     </div>
//   );
// }

// export default H;

// import React, { useEffect } from "react";
// import { Unity, useUnityContext } from "react-unity-webgl";

// function H() {
//   const { unityProvider, sendMessage, isLoaded } = useUnityContext({
//     loaderUrl: "./brainiac-unity/Build/brainiac-unity.loader.js",
//     dataUrl: "./brainiac-unity/Build/brainiac-unity.data",
//     frameworkUrl: "./brainiac-unity/Build/brainiac-unity.framework.js",
//     codeUrl: "./brainiac-unity/Build/brainiac-unity.wasm",
//   });

//   const handleRedClick = () => {
//     if (isLoaded) {
//       sendMessage("JavascriptHook", "TintRed");
//     }
//   };

//   const handleGreenClick = () => {
//     if (isLoaded) {
//       sendMessage("JavascriptHook", "TintGreen");
//     }
//   };

//   return (
//     <div className="unity-main">
//       <div
//         style={{
//           border: "solid 1px black",
//           width: "200px",
//           height: "30px",
//           margin: "auto",
//           textAlign: "center",
//           cursor: "pointer",
//           color: "blue",
//         }}
//         onClick={handleRedClick}
//       >
//         RED
//       </div>
//       <div
//         style={{
//           border: "solid 1px black",
//           width: "200px",
//           height: "30px",
//           margin: "auto",
//           textAlign: "center",
//           cursor: "pointer",
//           color: "blue",
//         }}
//         onClick={handleGreenClick}
//       >
//         GREEN
//       </div>

//       <div>
//         <Unity className="unity" unityProvider={unityProvider} />
//       </div>
//     </div>
//   );
// }

// export default H;


import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function H() {
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

  return (
    <div className="unity-main">
      <div
        style={{
          border: "solid 1px black",
          width: "200px",
          height: "30px",
          margin: "auto",
          textAlign: "center",
          cursor: "pointer",
          color: "blue",
        }}
        onClick={handleRedClick}
      >
        RED
      </div>
      <div
        style={{
          border: "solid 1px black",
          width: "200px",
          height: "30px",
          margin: "auto",
          textAlign: "center",
          cursor: "pointer",
          color: "blue",
        }}
        onClick={handleGreenClick}
      >
        GREEN
      </div>
      <div onclick="unityInstance.SendMessage('JavascriptHook', 'TintRed')">RED</div>
    <div onclick="unityInstance.SendMessage('JavascriptHook', 'TintGreen')">GREEN</div>

    {/* <button onClick={() => unityInstance?.SendMessage("JavascriptHook", "TintRed")} >RED</button>
      <button onClick={() => unityInstance?.SendMessage("JavascriptHook", "TintGreen")}>GREEN</button> */}


      <div>
        <Unity className="unity" unityProvider={unityProvider} />
      </div>
    </div>
  );
}

export default H;
