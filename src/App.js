import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container align-content-center">
        <News />
      </div>
    </div>
  );
}

export default App;
