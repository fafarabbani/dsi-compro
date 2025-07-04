import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dsi from "./components/Dsi";
import Product from "./components/Product";
import Products from "./components/Products";
import DetailsProduct from "./components/DetailsProduct";

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
    {/* <Products /> */}
    <About />
    <Contact />
    
  </>
);

const AboutPage = () => <About />;
const ProductsPage = () => <Products />;
const ContactPage = () => <Contact />;
const DetailPage = () => <DetailsProduct />;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
