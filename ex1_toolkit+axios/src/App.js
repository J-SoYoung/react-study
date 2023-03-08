import "./App.css";
import Header from "./components/Header";
import InfiniteScroll from "./components/infiniteScroll/InfiniteScroll";
import Home from "./pages/Home";
import Router from "./shared/Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
