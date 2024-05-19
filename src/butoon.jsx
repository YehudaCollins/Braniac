import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function H() {
  const { unityProvider} = useUnityContext({
    loaderUrl: "./brainiac-unity/Build/brainiac-unity.loader.js",
    dataUrl: "./brainiac-unity/Build/brainiac-unity.data",
    frameworkUrl: "./brainiac-unity/Build/brainiac-unity.framework.js",
    codeUrl: "./brainiac-unity/Build/brainiac-unity.wasm",
  });


  return (
    <div className="unity-main">
        <button>hh</button>
        <button>hh</button>
        <button>hh</button>

      <div>
        <Unity className="unity" unityProvider={unityProvider} />
      </div>
    </div>
  );
}

export default H;