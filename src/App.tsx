import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoLanding from './components/VideoLanding';
import { Products } from './components/sections/Products';
import { Solutions } from './components/sections/Solutions';
import { Contact } from './components/sections/Contact';
import About from './pages/About';
import ZONEnergy from './pages/ZONEnergy';
import SEERIntelMedia from './pages/SEERIntelMedia';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<VideoLanding />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/zon-energy" element={<ZONEnergy />} />
          <Route path="/products/seer-intel-media" element={<SEERIntelMedia />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;