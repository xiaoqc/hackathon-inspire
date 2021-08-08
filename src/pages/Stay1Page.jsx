import { useEffect } from "react";
import BaseStayPage from "./BaseStayPage";

export default function Stay1VideoPage() {
  useEffect(() => {
    document.getElementById("vid1").play();
  }, []);
  return (
    <BaseStayPage>
      <video
        id="vid1"
        autoplay
        muted
        style={{
          scrollSnapAlign: "start",
          width: "100%"
        }}
      >
        <source src="stay1-video.mp4" type="video/mp4"></source>
      </video>
      <img
        src="stay1-pdp-screen-shot.jpg"
        style={{
          scrollSnapAlign: "start",
          width: "100%"
        }}
        alt=""
      />
    </BaseStayPage>
  );
}
