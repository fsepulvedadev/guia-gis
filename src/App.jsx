import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./routes/Inicio";
import StepOne from "./routes/StepOne";
import StepTwo from "./routes/StepTwo";
import StepThree from "./routes/StepThree";
import PageNotFound from "./routes/PageNotFound";

function App() {
  return (
    <Router>
      <div className="w-100 min-w-100 h-full max-h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/1" element={<StepOne />} />
          <Route path="/2" element={<StepTwo />} />
          <Route path="/3" element={<StepThree />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
