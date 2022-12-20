import { RouterProvider } from "react-router-dom";
import "./i18n/config";
import router from "./router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
