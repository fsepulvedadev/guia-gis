import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./routes/Inicio";
import Preguntas from "./routes/Preguntas";
import Guia from "./routes/Guia";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/guia" element={<Guia />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
