import { useContext } from "react";
import "../styles/productCard.css";
import { CartContext } from "../context/cartContext";

const ProductCard = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="disply-container">
      <div className="display-products">
        {products &&
          products.map((item, ind) => {
            return (
              <div className="product-card " key={ind}>
                <div className="product-img ">
                  <img src={item.imageURL} alt={item.name} />
                </div>
                <p className="product-title pb-2">{item.name}</p>
                <div className="price-div ">
                  <span>
                    Price:
                    <span className="product-price ">₹ {item.price}</span>
                  </span>
                  <span
                    className="product-cart-icon"
                    onClick={() => addToCart(item)}
                  >
                    <i class="ri-shopping-cart-2-line"></i>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ProductCard;
