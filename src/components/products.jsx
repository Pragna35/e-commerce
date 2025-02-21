

import ProductCard from "./productCard";
import SideBar from "./sideBar";

import '../styles/products.css'

const Products = ({products, searchNotFound}) => {
 


  return (
    <>
    <div className="products-container">
   <SideBar/>

  <ProductCard products = {products} searchNotFound={searchNotFound}/>
    
   
    </div>
     
    </>
  );
};
export default Products;
