import BaseHashtagPage from "./shared/BaseHashtagPage";
import HeaderHashtag from "./shared/HeaderHashtag";
import Image from "./shared/Image";

export default function LocationsHashTagPage() {
  return (
    <BaseHashtagPage>
      <HeaderHashtag src="" tagname="Lake tahoe" subtext="1.5M views" />
      <div>Map image goes here</div>
      <Image altText="images go here" />
    </BaseHashtagPage>
  );
}
