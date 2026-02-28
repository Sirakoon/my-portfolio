import { BrowserRouter, Routes, Route } from "react-router-dom";
import CV from "./Components/CV";

function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <Routes>
        <Route path="/" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;