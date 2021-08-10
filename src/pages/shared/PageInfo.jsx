export default function PageInfo({
  title,
  tags,
  locationTags,
  location,
  onReviewsClick,
  onTagClick,
  onLocationTagClick
}) {
  return (
    <div
      className="page-info"
      style={{
        position: "absolute",
        left: 10,
        bottom: 80,
        color: "#fff"
      }}
    >
      <div
        style={{
          fontSize: "20px",
          marginBottom: 8
        }}
      >
        {title}
      </div>
      <div
        style={{
          margin: "5px 0"
        }}
        onClick={onReviewsClick}
      >
        <span style={{ color: "#fb4363" }}>★</span> (4.5) 230 reviews
      </div>
      <div>
        {tags.map((t) => (
          <Tag onTagClick={onTagClick} key={t} value={t} />
        ))}
      </div>
      <div>
        {locationTags.map((t) => (
          <Tag onTagClick={onLocationTagClick} key={t} value={t} />
        ))}
      </div>
      <div
        className="location"
        style={{
          opacity: 0.8
        }}
      >
        {location}
      </div>
    </div>
  );
}

function Tag({ value, onTagClick }) {
  return (
    <span
      style={{
        marginRight: 5
      }}
      onClick={onTagClick}
    >
      {value}
    </span>
  );
}
