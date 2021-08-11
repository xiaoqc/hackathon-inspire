import { IconClose } from "./Icons";

export default function CloseButton() {
  return (
    <div
      style={{
        position: "absolute",
        width: 28,
        height: 28,
        color: "#fff",
        top: 45,
        left: 20
      }}
    >
      <IconClose />
    </div>
  );
}
