import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/main/Hero";
import Product from "./components/main/Product";
import Contents from "./components/main/Contents";
import Price from "./components/main/Price";
import Say from "./components/main/Say";
import Join from "./components/main/Join";
function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Product />
      <Contents />
      <Price />
      <Say />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
