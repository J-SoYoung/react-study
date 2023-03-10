import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CarouselStudy } from "./components/moveComp/CarouselStudy";
import { ReduxStudy } from "./components/moveComp/ReduxStudy";
import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";
import { Mainpage } from "./pages/Mainpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:keyword" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/redux" element={<ReduxStudy />} />
        <Route path="/carousel" element={<CarouselStudy />} />
      </Routes>
    </div>
  );
}

export default App;
