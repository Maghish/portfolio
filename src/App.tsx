import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./css/index.css";

function App() {
  return (
    <div className="min-h-screen h-screen min-w-full bg-background px-[20px] lg:px-[80px] py-[40px] flex flex-col lg:flex-row gap-[60px] justify-center items-center">
      <LeftBar />
      <RightBar />
    </div>
  );
}

export default App;
