import { useState } from "react";
import "./styles.css";
import Stay1SwipeToPDP from "./scenes/Stay1SwipeToPDP";
import SwipeToNextVideo from "./scenes/SwipeToNextVideo";
import NavigateToHashtag1Page from "./scenes/NavigateToHashtag1Page";

import Viewport from "./Viewport";

const scenes = [Stay1SwipeToPDP, SwipeToNextVideo, NavigateToHashtag1Page];

export default function App() {
  const [sceneIndex, setSceneIndex] = useState(0);

  const CurrentScene = scenes[sceneIndex];

  return (
    <div className="app" style={appStyles}>
      {scenes.map((s, index) => (
        <button
          style={index === sceneIndex ? activeBtnStyle : btnStyle}
          onClick={() => {
            setSceneIndex(index);
          }}
        >
          {s.name}
        </button>
      ))}

      <Viewport>
        <CurrentScene />
      </Viewport>
    </div>
  );
}

const appStyles = {
  position: "relative",
  marginLeft: 40,
  marginTop: 40
};

const btnStyle = {
  marginRight: 5,
  marginBottom: 10
};

const activeBtnStyle = {
  ...btnStyle,
  backgroundColor: "#000",
  color: "#fff"
};
