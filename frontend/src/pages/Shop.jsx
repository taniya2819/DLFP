import React from "react";
import Navbar from "../components/Navbar";
import "../styles/shop.css";
import ProductsShop from "../components/ProductsShop";
import Footer from "../components/Footer";

function Shop() {
  return (
    <div>
      <Navbar />
      <div className="s-row">
        <div className="s-col">
          <ProductsShop />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
