export default function Image({ src, altText = "", onImageClick }) {
  return (
    <img
      src={src}
      style={{
        scrollSnapAlign: "start",
        width: "100%"
      }}
      onClick={onImageClick}
      alt={altText}
    />
  );
}
