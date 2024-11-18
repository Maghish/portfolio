import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./css/index.css";

function App() {
  return (
    <div className="min-h-screen h-screen min-w-full bg-background px-[40px] xl:px-[80px] py-[40px] flex flex-col xl:flex-row gap-[60px] justify-center items-center">
      <LeftBar />
      <RightBar />
    </div>
  );
}

export default App;
