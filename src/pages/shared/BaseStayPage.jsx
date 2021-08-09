import BasePage from "./BasePage";
import { IconShare } from "./Icons";
export default function BaseStayPage({ children }) {
  return (
    <BasePage>
      {children}
      <PageActions />
    </BasePage>
  );
}

function PageActions() {
  return (
    <div
      style={{
        position: "absolute",
        right: 15,
        top: 520,
        color: "#fff"
      }}
      className="page-actions"
    >
      <PageActionSvg />
      <PageActionUnicode value="♥" />
      <PageActionUnicode value="♥" />
      <PageActionUnicode value="♥" />
    </div>
  );
}

function PageActionUnicode({ value }) {
  return (
    <div
      style={{
        fontSize: "48px",
        color: "#fff",
        width: 48,
        height: 48,
        textAlign: "center"
      }}
    >
      {value}
    </div>
  );
}

function PageActionSvg() {
  return <IconShare />;
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
      this is to compensate google height
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
