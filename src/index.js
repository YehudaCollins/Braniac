import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UnityDemo from "./unity/unityDemo";
import { LevelProvider } from "./unity/LevelContext";  // Ensure correct import path




const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

// root.render(<App/>)
root.render(
    <LevelProvider>
      <UnityDemo />
    </LevelProvider>
  );