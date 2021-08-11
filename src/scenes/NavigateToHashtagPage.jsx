import HashtagPage from "../pages/HashtagPage";
import Stay1Page from "../pages/Stay1Page";

function scrollViewport(distance) {
  document
    .getElementById("viewport")
    .scroll({ left: distance, behavior: "smooth" });
}

export default function NavigateToHashTagPage({ setSceneIndex }) {
  return (
    <>
      <Stay1Page onTagClick={() => scrollViewport(200)} />
      <HashtagPage setSceneIndex={setSceneIndex} />
    </>
  );
}
