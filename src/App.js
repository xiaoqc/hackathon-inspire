import "./styles.css";
import Stay1SwipeToPDP from "./scenes/Stay1SwipeToPDP";

export default function App() {
  return (
    <div className="App" style={styles}>
      <Stay1SwipeToPDP />
      <img
        style={imgStyles}
        alt=""
        width={400}
        height={805}
        src="../iphone-frame.png"
      />
    </div>
  );
}

const styles = {
  position: "relative"
};
const imgStyles = {
  position: "absolute",
  left: 0,
  top: 0
};
