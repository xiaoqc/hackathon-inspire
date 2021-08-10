import Stay1Page from "../pages/Stay1Page";

export default function SwipeToNextVideo({ setSceneIndex }) {
  return (
    <>
      <Stay1Page setSceneIndex={setSceneIndex} />
      <Stay1Page setSceneIndex={setSceneIndex} />
    </>
  );
}
