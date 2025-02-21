import { useState, useEffect } from "react";
import "../styles/searchbar.css";

const SearchBar = ({ products, setFilteredProducts, setSearchNotFound }) => {
  const [priceFilter, setPriceFilter] = useState("");
  const [searchText, setSearchText] = useState("");

  //search bar filtering
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (!value) {
      setFilteredProducts(products);
      setSearchNotFound(false);
    } else {
      const filtered = products.filter((product) =>
        `${product.name} ${product.color} ${product.type}`
          .toLowerCase()
          .includes(searchText)
      );
      setFilteredProducts(filtered);
      setSearchNotFound(filtered.length === 0);
    }
  };

  //price filtering
  const handlePriceFilter = (e) => {
    const selectedValue = e.target.value;
    setPriceFilter(selectedValue);

    let sortedProducts = [...products];

    if (selectedValue === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
      setFilteredProducts(sortedProducts);
    } else if (selectedValue === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
      setFilteredProducts(sortedProducts);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="search-div">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchText}
          onChange={handleSearch}
        />
        <span className="search-icon ">
          <i class="ri-search-line"></i>
        </span>
      </div>

      <div className="price-filter-div">
        <select
          className="price-filter"
          value={priceFilter}
          onChange={handlePriceFilter}
        >
          <option value="">Filter by Price</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
