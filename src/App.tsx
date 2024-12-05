import "./css/index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen min-h-screen h-full flex flex-col overflow-clip overflow-x-auto">
      {/* Navbar, MainText, About Me, Projects, Bottom Bar */}
      <Navbar />
    </div>
  );
}

export default App;
