import BaseHashtagPage from "./shared/BaseHashtagPage";
import HeaderHashtag from "./shared/HeaderHashtag";
import Image from "./shared/Image";
import { SceneToIndexMap } from "../constants";

export default function LocationsHashTagPage({ setSceneIndex }) {
  return (
    <BaseHashtagPage>
      <HeaderHashtag src="" tagname="Lake tahoe" subtext="1.5M views" />
      <div>Map image goes here</div>
      <Image
        onImageClick={() => setSceneIndex(SceneToIndexMap.SwipeToNextVideo)}
        src="laketahoe.jpeg"
      />
      <Image
        onImageClick={() => setSceneIndex(SceneToIndexMap.SwipeToNextVideo)}
        src="laketahoe.jpeg"
      />
      <Image
        onImageClick={() => setSceneIndex(SceneToIndexMap.SwipeToNextVideo)}
        src="laketahoe.jpeg"
      />
    </BaseHashtagPage>
  );
}
