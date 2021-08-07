import { useEffect } from "react";
import BasePage from "./BasePage";

export default function Stay1VideoPage() {
  useEffect(() => {
    document.getElementById("vid1").play();
  }, []);
  return (
    <BasePage>
      <video id="vid1" autoplay muted style={{ width: "100%" }}>
        <source src="stay-1-video.mp4" type="video/mp4"></source>
      </video>
    </BasePage>
  );
}
