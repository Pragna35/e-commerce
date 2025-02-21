import NavBar from "../components/navbar";
import Products from "../components/products";
import SearchBar from "../components/searchbar";
import { useState, useEffect } from "react";

import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);

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
          setSearchNotFound = {setSearchNotFound}
        />
        <Products products={filteredProducts} searchNotFound={searchNotFound}/>
      </div>
    </>
  );
};
export default HomePage;
