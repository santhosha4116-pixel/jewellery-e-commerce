
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoriesSection from "./components/CategoriesSection";
import ProductsSection from "./components/ProductsSection";
import FAQ from "./components/FQA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <section id="collections">
        <CategoriesSection />
      </section>

      <section id="products">
        <ProductsSection />
      </section>

      <section id="about">
        {/* Your About component goes here */}
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <Footer />
    </>
  );
}

export default App;
