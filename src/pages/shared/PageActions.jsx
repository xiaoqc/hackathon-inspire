import { IconShare, IconHeart, IconBack } from "./Icons";

export default function PageActions({
  onBookClick,
  onShareClick,
  onSaveClick,
  onBackClick
}) {
  return (
    <div
      style={{
        position: "absolute",
        right: 15,
        bottom: 80,
        color: "#fff"
      }}
      className="page-actions"
    >
      <ActionContainer onClick={onBookClick}>
        <PageActionImg src="shopping-bag.png" />
      </ActionContainer>
      <ActionContainer onClick={onSaveClick}>
        <IconHeart />
      </ActionContainer>
      <ActionContainer onClick={onShareClick}>
        <IconShare />
      </ActionContainer>
    </div>
  );
}

function ActionContainer({ children, onClick }) {
  return (
    <div
      className="action-container"
      style={{
        marginTop: 20
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function PageActionUnicode({ value, onClick }) {
  return (
    <ActionContainer>
      <div
        style={{
          fontSize: "60px",
          color: "#fff",
          width: 48,
          height: 48,
          lineHeight: "48px",
          textAlign: "center"
        }}
        onClick={onClick}
      >
        {value}
      </div>
    </ActionContainer>
  );
}

function PageActionImg({ src }) {
  return (
    <ActionContainer>
      <img
        style={{
          width: 48,
          borderRadius: "50%"
        }}
        src={src}
        alt=""
      />
    </ActionContainer>
  );
}
