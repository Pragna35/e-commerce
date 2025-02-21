import NavBar from "../components/navbar";
import Products from "../components/products";
import SearchBar from "../components/searchbar";
import { useState, useEffect } from "react";

import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [filters, setFilters] = useState({
    colors: [],
    genders: [],
    prices: [],
    types: []
  })

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

    // Handle filter changes
    const handleFilterChange = (category, value) => {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        updatedFilters[category] = updatedFilters[category].includes(value)
          ? updatedFilters[category].filter((item) => item !== value)
          : [...updatedFilters[category], value];
  
        return updatedFilters;
      });
    };

     // Apply Filters
  useEffect(() => {
    let filtered = products;

    if (filters.colors.length) {
      filtered = filtered.filter((product) => filters.colors.includes(product.color));
    }
    if (filters.genders.length) {
      filtered = filtered.filter((product) => filters.genders.includes(product.gender));
    }
    if (filters.types.length) {
      filtered = filtered.filter((product) => filters.types.includes(product.type));
    }
    if (filters.prices.length) {
      filtered = filtered.filter((product) => {
        return filters.prices.some((range) => {
          const price = product.price;
          if (range === "Under 250") return price < 250;
          if (range === "251-350") return price >= 251 && price <= 350;
          if (range === "351-450") return price >= 351 && price <= 450;
          if (range === "451-500") return price >= 451 && price <= 500;
          if (range === "Above 500") return price > 500;
          return false;
        });
      });
    }

    setFilteredProducts(filtered);
    setSearchNotFound(filtered.length === 0);
  }, [filters, products]);

  return (
    <>
      <NavBar />

      <div className="div">
        <SearchBar
          products={products}
          setFilteredProducts={setFilteredProducts}
          setSearchNotFound = {setSearchNotFound}
        />
        <Products products={filteredProducts} searchNotFound={searchNotFound} handleFilterChange={handleFilterChange}/>
      </div>
    </>
  );
};
export default HomePage;
