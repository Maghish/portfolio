import "./css/index.css";
import Navbar from "./components/Navbar";
import MainText from "./components/MainText";
import AboutMe from "./components/AboutMe";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div className="w-screen min-h-screen h-full flex flex-col overflow-clip overflow-x-auto">
      {/* Navbar, MainText, About Me, Projects, Bottom Bar */}
      <Navbar />
      <MainText />
      <AboutMe />
      <BottomBar />
    </div>
  );
}

export default App;
