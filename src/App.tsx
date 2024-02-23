import "./css/index.css";
import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="w-full min-h-screen">{routes}</div>
    </>
  );
}

export default App;
