import BaseStayPage, {
  MainVideo,
  CompensateDiv,
  CheckoutDateImage
} from "./shared/BaseStayPage";

import PageActions from "./shared/PageActions";
import PageInfo from "./shared/PageInfo";
import { SceneToIndexMap } from "../constants";

function scrollViewport(distance) {
  document
    .getElementById("viewport")
    .scroll({ top: distance, behavior: "smooth" });
}

export default function CheckoutDatePage() {
  return (
    <BaseStayPage>
      <MainVideo src="stay1-video.mp4" />
      <CompensateDiv />
      <CheckoutDateImage src="checkout_date.png" />
      <PageActions onBookClick={() => scrollViewport(2870)} />
      <PageInfo
        title="$200, 4 guests, entire house"
        tags={["#treehouse", "#beach", "#superhost", "#tiny-home"]}
        locationTags={["#laketahoe", "#francetravel"]}
        location="📍 Josha tree, California"
      />
    </BaseStayPage>
  );
}
