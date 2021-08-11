import BaseStayPage, {
  MainVideo,
  CompensateDiv,
  ReviewsImage
} from "./shared/BaseStayPage";

import PageActions from "./shared/PageActions";
import PageInfo from "./shared/PageInfo";
import { SceneToIndexMap } from "../constants";

function scrollViewport(distance) {
  document
    .getElementById("viewport")
    .scroll({ top: distance, behavior: "smooth" });
}

export default function ReviewsPage() {
  return (
    <BaseStayPage>
      <MainVideo src="stay1-video.mp4" />
      <CompensateDiv />
      <PageActions />
      <ReviewsImage src="reviews_1.png" />
      <ReviewsImage src="reviews_2.png" />
      <ReviewsImage src="reviews_3.png" />
      <PageInfo
        title="$200, 4 guests, entire house"
        tags={["#treehouse", "#beach", "#superhost", "#tiny-home"]}
        locationTags={["#laketahoe", "#francetravel"]}
        location="📍 Josha tree, California"
        onReviewsClick={() => scrollViewport(2870)}
      />
    </BaseStayPage>
  );
}
