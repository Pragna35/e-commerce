import NavBar from "../components/navbar";
import Products from "../components/products";
import SearchBar from "../components/searchbar";
import { useState, useEffect } from "react";

import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
      .then((res) => {
        setProducts(res.data)
        setFilteredProducts(res.data)
      }
    )
      
  }, []);

  return (
    <>
      <NavBar />

      <div className="div">
        <SearchBar
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
        <Products products={filteredProducts} />
      </div>
    </>
  );
};
export default HomePage;
