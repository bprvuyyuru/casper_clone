import { useState } from "react";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PromotionsBanner from "./components/PromotionsBanner";

function App() {
  return (
    <>
      <PromotionsBanner />
      <Navbar />
      <ProductDetail />
      <Footer />
    </>
  );
}

export default App;
