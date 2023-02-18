import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";
import { Mainpage } from "./pages/Mainpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:keyword" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
