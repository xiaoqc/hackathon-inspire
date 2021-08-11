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
      <div id="viewport" className="viewport" style={viewportStyles}>
        {children}
      </div>
      <img
        style={imgStyles}
        alt=""
        width={400}
        height={805}
        src="../iphone-frame.png"
      />
      <div
        className="iphone-home-line"
        style={{
          background: "#fff",
          position: "absolute",
          height: 5,
          bottom: 28,
          borderRadius: 5,
          left: 130,
          right: 130
        }}
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
