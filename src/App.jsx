import "./styles.css";
import Stay1SwipeToPDP from "./scenes/Stay1SwipeToPDP";
import Viewport from "./Viewport";

export default function App() {
  return (
    <div className="app" style={appStyles}>
      <Viewport>
        <Stay1SwipeToPDP />
      </Viewport>
    </div>
  );
}

const appStyles = {
  position: "relative",
  marginLeft: 20,
  marginTop: 20
};
