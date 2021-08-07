import BasePage from "./BasePage";
export default function BaseStayPage({ children }) {
  return (
    <BasePage>
      {children}
      <BottomRightArea />
    </BasePage>
  );
}

function BottomRightArea() {
  return (
    <div style={bottomRightArea} className="unicode-icon">
      ♡
    </div>
  );
}

const bottomRightArea = {
  position: "absolute",
  right: 10,
  top: 400
};
