import BaseHashtagPage from "./shared/BaseHashtagPage";
import HeaderHashtag from "./shared/HeaderHashtag";
import Image from "./shared/Image";
import { SceneToIndexMap } from "../constants";

export default function HashTagPage({ setSceneIndex }) {
  return (
    <BaseHashtagPage>
      <HeaderHashtag src="" tagname="francetravel" subtext="1.5M views" />
      <Image
        onImageClick={() => setSceneIndex(SceneToIndexMap.SwipeToNextVideo)}
        src="francetravel.jpeg"
      />
      <Image
        onImageClick={() => setSceneIndex(SceneToIndexMap.SwipeToNextVideo)}
        src="francetravel.jpeg"
      />
      <Image
        onImageClick={() => setSceneIndex(SceneToIndexMap.SwipeToNextVideo)}
        src="francetravel.jpeg"
      />
    </BaseHashtagPage>
  );
}
