import BaseHashtagPage from "./shared/BaseHashtagPage";
import HeaderHashtag from "./shared/HeaderHashtag";
import Image from "./shared/Image";

export default function HashTagPage() {
  return (
    <BaseHashtagPage>
      <HeaderHashtag src="" tagname="francetravel" subtext="1.5M views" />
      <Image altText="images go here" />
    </BaseHashtagPage>
  );
}
