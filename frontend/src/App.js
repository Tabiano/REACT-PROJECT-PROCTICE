import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import POSPage from "./pages/POSpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pos" element={<POSPage />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
