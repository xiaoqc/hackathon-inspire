import Stay1Page from "../pages/Stay1Page";
import LocationsHashtagPage from "../pages/LocationsHashtagPage";

function scrollViewport(distance) {
  document
    .getElementById("viewport")
    .scroll({ left: distance, behavior: "smooth" });
}

export default function NavigateLocationsHashtagPage({ setSceneIndex }) {
  return (
    <>
      <Stay1Page onLocationTagClick={() => scrollViewport(300)} />
      <LocationsHashtagPage setSceneIndex={setSceneIndex} />
    </>
  );
}
