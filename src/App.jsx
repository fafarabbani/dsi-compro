import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/Footer";
import Dsi from "./components/Dsi";
import Product from "./components/Product";
import Spandek from "./Pages/Brands/Spandek";
import Tray from "./Pages/Brands/Tray";
import DetailSpandek from "./Pages/Brands/Detail/DetailSpandek";

// Wrapper component to handle scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

// Layout component to handle shared structure
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// Page components
const HomePage = () => (
  <>
    <Hero />
    <Dsi />
    <Product />
    <Contact />
  </>
);

const AboutPage = () => <About />;
const ContactPage = () => <Contact />;
const BrandSpandek = () => <Spandek />;
const BrandTray = () => <Tray />;
const DetailSpandekPage = () => <DetailSpandek />;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/brands/:category" element={<BrandSpandek />} />
          <Route path="/brands/tray" element={<BrandTray />} />
          <Route path="/brands/spandek/detail" element={<DetailSpandekPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
