import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoriesSection from "./components/CategoriesSection";
import ProductsSection from "./components/ProductsSection";
import CustomerReviews from "./components/CustomerReviews";
import FAQ from "./components/FQA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <CategoriesSection />
      <ProductsSection />
      <CustomerReviews />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
