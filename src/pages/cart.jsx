import { useContext } from "react";
import "../styles/cart.css";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    clearCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="cart-container">
        <div className="clear-cart ">
          <button className="back-shop-btn " onClick={() => navigate("/")}>
            <i class="ri-arrow-left-line"></i> back to shopping
          </button>
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear cart
          </button>
        </div>
        {cart.length > 0 ? (
          cart.map((item, ind) => {
            console.log(item.availableStock);
            return (
              <div key={ind}>
                <div className="cart-div ">
                  <div className="cart-img">
                    <img src={item.imageURL} alt={item.name} />
                  </div>
                  <div className="cart-title">
                    <p>{item.name}</p>
                    <span
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i class="ri-close-line"></i> Remove
                    </span>
                  </div>

                  <div className="quantity-div  ">
                    <div
                      className="increment-btn "
                      onClick={() =>
                        incrementQuantity(item.id, item.availableStock)
                      }
                    >
                      <span>+</span>
                    </div>
                    <span className="quantity-text ">{item.quantity}</span>
                    <div
                      className="decrement-btn "
                      onClick={() => decrementQuantity(item.id)}
                    >
                      <span>-</span>
                    </div>
                  </div>
                  <div className="cart-price ">
                    <span>₹</span> {item.price * item.quantity}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-div">
            <h1 className="empty-cart"> cart is empty</h1>
          </div>
        )}

        <hr />
        <div>
          <div className="total-price-div">
            <h1>Total: </h1>
            <div className="total-price">
              <span>₹</span> {totalPrice}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
