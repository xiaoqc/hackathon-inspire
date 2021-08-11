import BaseStayPage, {
  MainVideo,
  CompensateDiv,
  ShareItemImage
} from "./shared/BaseStayPage";

import PageActions from "./shared/PageActions";
import PageInfo from "./shared/PageInfo";
import { SceneToIndexMap } from "../constants";

function scrollViewport(distance) {
  document
    .getElementById("viewport")
    .scroll({ top: distance, behavior: "smooth" });
}

export default function SharePage() {
  return (
    <BaseStayPage>
      <MainVideo src="stay1-video.mp4" />
      <CompensateDiv />
      <ShareItemImage src="share_item.png" />
      <PageActions onShareClick={() => scrollViewport(2870)} />
      <PageInfo
        title="$200, 4 guests, entire house"
        tags={["#treehouse", "#beach", "#superhost", "#tiny-home"]}
        locationTags={["#laketahoe", "#francetravel"]}
        location="📍 Josha tree, California"
      />
    </BaseStayPage>
  );
}
