export default function Image({ src, altText = "" }) {
  return (
    <img
      src={src}
      style={{
        scrollSnapAlign: "start",
        width: "100%"
      }}
      alt={altText}
    />
  );
}
