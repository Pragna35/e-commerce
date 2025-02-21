

import ProductCard from "./productCard";
import SideBar from "./sideBar";

import '../styles/products.css'

const Products = ({products}) => {
 


  return (
    <>
    <div className="products-container">
   <SideBar/>

  <ProductCard products = {products}/>
    
   
    </div>
     
    </>
  );
};
export default Products;
