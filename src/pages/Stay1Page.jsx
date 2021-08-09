import BaseStayPage, {
  MainVideo,
  CompensateDiv,
  PdpImage
} from "./shared/BaseStayPage";

import PageInfo from "./shared/PageInfo";

export default function Stay1VideoPage() {
  return (
    <BaseStayPage>
      <MainVideo src="stay1-video.mp4" />
      <CompensateDiv />
      <PdpImage src="stay1-pdp-screen-shot.jpg" />
      <PageInfo
        title="$200, 4 guests, entire house"
        tags={["#treehouse", "#beach", "#superhost", "#tiny-home"]}
        location="📍 Josha tree, California"
      />
    </BaseStayPage>
  );
}
