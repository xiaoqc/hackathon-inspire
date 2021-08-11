import BaseStayPage, {
  MainVideo,
  CompensateDiv,
  PdpImage
} from "./shared/BaseStayPage";

import PageActions from "./shared/PageActions";
import PageInfo from "./shared/PageInfo";
import CloseButton from "./shared/CloseButton";
import ScrollUpButton from "./shared/ScrollUpButton";

function scrollViewport(distance) {
  document
    .getElementById("viewport")
    .scroll({ top: distance, behavior: "smooth" });
}

export default function Stay1Page({ onTagClick, onLocationTagClick }) {
  return (
    <BaseStayPage>
      <MainVideo src="stay1-video.mp4" />
      <CloseButton />
      <CompensateDiv />
      <PdpImage src="stay1-pdp-screen-shot.jpeg" />
      <PageActions
        hostImage="stay1-host.jpeg"
        onBookClick={() => scrollViewport(2870)}
      />
      <PageInfo
        title="$200, 4 guests, entire house"
        tags={["#treehouse", "#beach", "#superhost", "#tiny-home"]}
        locationTags={["#laketahoe", "#francetravel"]}
        location="📍 Josha tree, California"
        onReviewsClick={() => scrollViewport(3010)}
        onTagClick={onTagClick}
        onLocationTagClick={onLocationTagClick}
      />
      <ScrollUpButton />
    </BaseStayPage>
  );
}
