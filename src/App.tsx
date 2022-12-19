import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroHeader from "./components/hero-header/HeroHeader";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
