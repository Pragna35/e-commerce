import { useContext } from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCartBtn = () => {
    navigate("/cart");
  };

  return (
    <nav className="navbar">
      <div className="logo-div">
        <h2 className="logo">ShopEase</h2>
      </div>
      <div className="nav-links">
        <div className="nav-head">Products</div>
        <span className="nav-cart-btn" onClick={handleCartBtn}>
          <i class="ri-shopping-cart-fill"></i>
          <span className="cart-count">{cart.length}</span>
        </span>
      </div>
    </nav>
  );
};
export default NavBar;
