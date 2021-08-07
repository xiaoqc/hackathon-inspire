import {
  viewportHeight,
  viewportWidth,
  frameSidePadding,
  frameTopPadding
} from "../constants";
export default function BasePage({ children }) {
  return (
    <div
      style={{
        width: viewportWidth,
        height: viewportHeight,
        paddingLeft: frameSidePadding,
        paddingTop: frameTopPadding
      }}
    >
      {children}
    </div>
  );
}
