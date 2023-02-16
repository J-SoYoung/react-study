import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:keyword" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
