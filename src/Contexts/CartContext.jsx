import { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

// Create a provider to wrap the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to the cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // Update the quantity of the existing product
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add the new product with an initial quantity of 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update product quantity in the cart
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Get total items in cart
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Get total price of items in cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartCount,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use Cart context
export const useCart = () => useContext(CartContext);
