import { BrowserRouter, Routes, Route } from "react-router-dom";
import CV from "./components_temp/CV";

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