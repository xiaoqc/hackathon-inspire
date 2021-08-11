import HomePage from "../pages/HomePage";
import Stay1Page from "../pages/Stay1Page";

function scrollViewport(distance) {
  document
    .getElementById("viewport")
    .scroll({ left: distance, behavior: "smooth" });
}

export default function EnterAndBrowse() {
  return (
    <>
      <HomePage onInspireClick={() => scrollViewport(200)} />
      <Stay1Page />
      <Stay1Page />
      <Stay1Page />
    </>
  );
}
