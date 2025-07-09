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
import Spandek from "./components/Spandek";
import Tray from "./components/Tray";
import DetailsSpandek from "./components/DetailsSpandek";
import MaterialsTray from "./components/MaterialsTray";
import DetailsTray from "./components/DetailsTray";
// import DetailsProduct from "./components/DetailsProduct";

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
    <About />
    <Contact />
  </>
);

const AboutPage = () => <About />;
const ProductsPage = () => <Products />;
const ContactPage = () => <Contact />;
const BrandSpandek = () => <Spandek />;
const BrandTray = () => <Tray />;
const DetailSpandekPage = () => <DetailsSpandek />;
const MaterialTrayPage = () => <MaterialsTray />;
const DetailTrayPage = () => <DetailsTray />;
// const DetailPage = () => <DetailsProduct />;

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
          <Route path="/brands/spandek" element={<BrandSpandek />} />
          <Route path="/brands/tray" element={<BrandTray />} />
          <Route path="/brands/spandek/detail" element={<DetailSpandekPage />} />
          <Route path="/brands/tray/materials" element={<MaterialTrayPage />} />
          <Route path="/brands/tray/materials/details" element={<DetailTrayPage />} />
          {/* <Route path="/detail" element={<DetailPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
