import { viewportWidth } from "../constants";
import Stay1Page from "../pages/Stay1Page";

const hScroller = {
  width: viewportWidth
};

export default function SwipeToNextVideo() {
  return (
    // <div className="h-scroller" style={hScroller}>
    <>
      <Stay1Page />
      <Stay1Page />
    </>
    // </div>
  );
}
