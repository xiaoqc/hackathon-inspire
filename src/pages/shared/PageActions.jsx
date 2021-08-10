import { IconShare } from "./Icons";

export default function PageActions({ onBookClick, onShareClick }) {
  return (
    <div
      style={{
        position: "absolute",
        right: 15,
        top: 520,
        color: "#fff"
      }}
      className="page-actions"
    >
      <PageActionSvg />
      <PageActionUnicode value="♥" onClick={onBookClick} />
      <PageActionUnicode value="♥" onClick={onShareClick} />
      <PageActionUnicode value="♥" />
    </div>
  );
}

function PageActionUnicode({ value, onClick }) {
  return (
    <div
      style={{
        fontSize: "48px",
        color: "#fff",
        width: 48,
        height: 48,
        textAlign: "center"
      }}
      onClick={onClick}
    >
      {value}
    </div>
  );
}

function PageActionSvg() {
  return <IconShare />;
}
