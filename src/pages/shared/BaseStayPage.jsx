import BasePage from "./BasePage";
export default function BaseStayPage({ children }) {
  return <BasePage>{children}</BasePage>;
}

export function MainVideo({ src }) {
  return (
    <video
      loop
      autoPlay
      muted
      style={{
        scrollSnapAlign: "start",
        width: "100%"
      }}
    >
      <source src={src} type="video/mp4"></source>
    </video>
  );
}

export function CompensateDiv() {
  return (
    <div
      className="compensate-div"
      style={{
        height: 139,
        backgroundColor: "#000",
        marginTop: -4,
        color: "#3e2b2b",
        textAlign: "center"
      }}
    >
      this is to compensate the video height
    </div>
  );
}

export function PdpImage({ src }) {
  return (
    <img
      src={src}
      style={{
        scrollSnapAlign: "start",
        width: "100%"
      }}
      alt=""
    />
  );
}

export function CheckoutDateImage({ src }) {
  return (
    <img
      src={src}
      style={{
        scrollSnapAlign: "start",
        width: "100%"
      }}
      alt=""
    />
  );
}

export function ShareItemImage({ src }) {
  return (
    <img
      src={src}
      style={{
        scrollSnapAlign: "start",
        width: "100%"
      }}
      alt=""
    />
  );
}

export function ReviewsImage({ src }) {
  return (
    <img
      src={src}
      style={{
        scrollSnapAlign: "start",
        width: "100%"
      }}
      alt=""
    />
  );
}
