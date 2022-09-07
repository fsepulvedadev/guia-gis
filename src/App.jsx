import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./routes/Inicio";
import StepOne from "./routes/StepOne";
import StepTwo from "./routes/StepTwo";
import StepThree from "./routes/StepThree";
import Guia from "./routes/Guia";

function App() {
  return (
    <Router>
      <div className="h-full max-h-full w-100 min-w-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/primerpaso" element={<StepOne />} />
          <Route path="/segundopaso" element={<StepTwo />} />
          <Route path="/tercerpaso" element={<StepThree />} />
          <Route path="/guia" element={<Guia />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
