import Image from "./Image";
export default function HeaderHashtag({ src, tagname, subtext }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <Image src={src} altText="hashtag image goes here" />
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Text t={tagname} />
        <Text t={subtext} />
      </div>
    </div>
  );
}

function Text({ t }) {
  return <p>{t}</p>;
}
