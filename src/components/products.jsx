

import ProductCard from "./productCard";
import SideBar from "./sideBar";

import '../styles/products.css'

const Products = ({products, searchNotFound, handleFilterChange}) => {
 


  return (
    <>
    <div className="products-container">
   <SideBar handleFilterChange= {handleFilterChange}/>

  <ProductCard products = {products} searchNotFound={searchNotFound}/>
    
   
    </div>
     
    </>
  );
};
export default Products;
