import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './components/About';
import Footer from './components/Footer';
import Home from './Pages/Home';
import ServicesPage from './Pages/ServicesPages';
import ContactPage from './Pages/Contact';
import MessagesPage from './Pages/Message';

const App = () => {
  return (
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path="/messages" element={<MessagesPage />} />
          </Routes>
        <Footer />
      </Router>
  );
};

export default App;
