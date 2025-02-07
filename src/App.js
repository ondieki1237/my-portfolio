// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PortfolioPage from './pages/PortfolioPage';
import ManagementExperience from './pages/ManagementExperience';
import BackgroundPage from './pages/BackgroundPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/background" element={<BackgroundPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/management" element={<ManagementExperience />} />
      </Routes>
    </Router>
  );
}

export default App;
