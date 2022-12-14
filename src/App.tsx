import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroHeader from "./components/hero-header/HeroHeader";

function App() {
  return (
    <div className="App">
      <Navbar isHomePage={true} />
      <HeroHeader />
    </div>
  );
}

export default App;
