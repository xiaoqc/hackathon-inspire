export default function PageInfo({ title, tags, location }) {
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
      {tags.map((t) => (
        <Tag value={t} />
      ))}
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

function Tag({ value }) {
  return (
    <span
      style={{
        marginRight: 5
      }}
    >
      {value}
    </span>
  );
}
