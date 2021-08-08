import {
  frameHeight,
  frameSidePadding,
  frameTopPadding,
  frameWidth,
  viewportHeight
} from "./constants";

export default function Viewport({ children }) {
  return (
    <div className="frame" style={frameStyles}>
      <div className="viewport" style={viewportStyles}>
        {children}
      </div>
      <img
        style={imgStyles}
        alt=""
        width={400}
        height={805}
        src="../iphone-frame.png"
      />
    </div>
  );
}

const frameStyles = {
  position: "relative",
  boxSizing: "border-box",
  width: frameWidth,
  height: frameHeight,
  paddingLeft: frameSidePadding,
  paddingRight: frameSidePadding,
  paddingTop: frameTopPadding,
  paddingBottom: frameTopPadding
};

const viewportStyles = {
  // position: "relative"
  overflow: "scroll",
  height: viewportHeight,
  scrollSnapType: "both mandatory",
  display: "flex"
};

const imgStyles = {
  position: "absolute",
  left: 0,
  top: 0,
  pointerEvents: "none"
};
