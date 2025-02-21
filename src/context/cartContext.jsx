import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //adding item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity + 1 > product.quantity) {
          alert(`Only ${product.quantity} items available in stock!`);
          return prevCart;
        }

        //updating the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ...product, cartQuantity: 1, availableStock: product.quantity },
        ];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  const incrementQuantity = (id, availableStock) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          if (item.quantity < availableStock) {
            return { ...item, quantity: item.quantity + 1 };
          }
          alert(`Only ${availableStock} items available in stock!`);
          return item;
        }
        return item;
      })
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
