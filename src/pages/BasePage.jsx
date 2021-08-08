import { viewportWidth } from "../constants";
export default function BasePage({ children }) {
  return (
    <div className="base-page" style={pageStlyes}>
      {children}
    </div>
  );
}

const pageStlyes = {
  width: viewportWidth,
  position: "relative",
  scrollSnapAlign: "start",
  flex: `0 0 ${viewportWidth}px`
};
