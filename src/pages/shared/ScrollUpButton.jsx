import { IconArrowLeft } from "./Icons";

export default function ScrollUpButton() {
  return (
    <div
      className="scroll-up-button"
      style={{
        position: "absolute",
        width: "40px",
        height: "40px",
        color: "#fff",
        bottom: "22px",
        left: "50%",
        transform: "translateX(-50%) rotate(90deg)"
      }}
    >
      <IconArrowLeft />
    </div>
  );
}
