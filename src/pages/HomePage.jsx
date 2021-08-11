import BasePage from "./shared/BasePage";

export default function HomePage({ onInspireClick }) {
  return (
    <BasePage>
      <img src="home-page.jpg" alt="" width="100%" />
      <img
        onClick={onInspireClick}
        src="inspire-icon.jpg"
        alt=""
        style={{
          position: "absolute",
          left: 92,
          width: 26,
          bottom: 24
        }}
      />
    </BasePage>
  );
}
