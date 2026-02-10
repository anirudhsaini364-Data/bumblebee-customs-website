import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
