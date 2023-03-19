import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./app/App";
import {
  runningImage,
  readingImage,
  wakeupImage,
  drinkingImage,
  ploggingImage,
  zerowasteImage,
  beachcombingImage,
  readingnewsImage,
  meditationImage,
  saladImage,
  eatingImage,
  writingImage
} from "./index.js";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

