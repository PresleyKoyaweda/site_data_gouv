import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n/config';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Approach from './pages/Approach';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;