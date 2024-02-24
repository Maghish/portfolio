import "./css/index.css";

import BackgroundImage from "./assets/Background.png";

function App() {
  return (
    <div className="h-screen w-full">
      <img
        src={BackgroundImage}
        alt="background-img"
        className="object-cover w-full h-full"
      ></img>
    </div>
  );
}

export default App;
