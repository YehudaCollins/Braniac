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
  const handleStringClick = ()=> {
    if (isLoaded) {
      sendMessage('JavascriptHook', 'SetNumber', 56)
      }
  }
  
  const handleNumberClick = ()=> {
    if (isLoaded) {
      sendMessage('JavascriptHook', 'SetString', 'hello')
      }
  }

  return (
    <div className="unity-main">
<div className="hhh">
      <button
        style={{
          backgroundColor:"red",
          color: "white",
        }}
        onClick={handleRedClick}
      >
        RED
      </button>
      <button
        style={{
          backgroundColor:"green",

          color: "white",
        }}
        onClick={handleGreenClick}
      >
        GREEN
      </button>

      <button style={{
          backgroundColor:"green",
          color: "white",
        }} onClick={handleNumberClick}>
          Number
          </button>
    <button style={{
          backgroundColor:"green",

          color: "white",
        }} onClick={handleStringClick}>
          String
          </button> 



      {/* <button onclick="unityInstance.SendMessage('JavascriptHook', 'TintRed')">RED</button>
    <button onclick="unityInstance.SendMessage('JavascriptHook', 'TintGreen')">GREEN</button>
    <div onclick="unityInstance.SendMessage('JavascriptHook', 'SetNunber', 56)">Number</div>
    <div onclick="unityInstance.SendMessage('JavascriptHook', 'SetString', 'hello world')">String</div> */}


    {/* <button onClick={() => unityInstance?.SendMessage("JavascriptHook", "TintRed")} >RED</button>
      <button onClick={() => unityInstance?.SendMessage("JavascriptHook", "TintGreen")}>GREEN</button> */}
</div>

      <div>
        <Unity className="unity" unityProvider={unityProvider} />
      </div>
    </div>
  );
}

export default H;
