import "./css/index.css";
import Navbar from "./components/Navbar";

import BackgroundImage from "./assets/Background.png";

function App() {
  return (
    <div className="min-h-screen h-screen w-full">
      <Navbar />
      <img
        src={BackgroundImage}
        alt="background-img"
        className="object-cover w-full h-full"
        loading="lazy"
      ></img>
    </div>
  );
}

export default App;
