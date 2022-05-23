import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News key="general" />} />
        <Route exact path="/business" element={<News key="business" category="business" />} />
        <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
        <Route exact path="/general" element={<News key="general" category="" />} />
        <Route exact path="/health" element={<News key="health" category="health" />} />
        <Route exact path="/science" element={<News key="science" category="science" />} />
        <Route exact path="/sports" element={<News key="sports" category="sports" />} />
        <Route exact path="/technology" element={<News key="technology" category="technology" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
