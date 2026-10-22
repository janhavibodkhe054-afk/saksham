
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import StickyLanguageSwitcher from "./components/StickyLanguageSwitcher";

// Language Context
import { LanguageProvider } from "./context/LanguageContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Program from "./pages/Program";
import Impact from "./pages/Impact";
import CSR from "./pages/CSR";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Program />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/csr" element={<CSR />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

        {/* FIXED LANGUAGE SWITCHER */}
        <StickyLanguageSwitcher />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
