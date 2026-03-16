import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Servicespage from "./pages/Servicespage";
import Ourwork from "./pages/Ourwork";
import Ourcompany from "./pages/Ourcompany";
import Contact from "./pages/Contact";
import Career from "./pages/Career";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Servicespage" element={<Servicespage />} />
          <Route path="/Ourwork" element={<Ourwork />} />
          <Route path="/Ourcompany" element={<Ourcompany />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
