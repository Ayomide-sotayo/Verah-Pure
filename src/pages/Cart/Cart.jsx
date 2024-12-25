import { useCart } from "/src/contexts/CartContext.jsx"; // Import the custom hook
import { NavLink } from "react-router-dom";
import "../Cart/Cart.css"
const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart(); // Use the hook

  return (
    <section className="Cart">
      <div className="container py-5">
        <h1 className="mb-4 text-center color merriweather-bold ">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center">
            Your cart is empty. <NavLink to="/shop">Shop now</NavLink>
          </p>
        ) : (
          <>
            <div className="table-responsive mb-4">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "80px",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>₦{item.price.toFixed(2)}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(item.quantity - 1, 1)
                              )
                            }
                            className="btn btn-outline-secondary btn-sm me-2"
                            disabled={item.quantity === 1} // Disable if quantity is 1
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="btn btn-outline-secondary btn-sm ms-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>₦{(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <h4>Total: ₦{getTotalPrice().toFixed(2)}</h4>
              <button className="btn btn-primary btn-lg">Checkout</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
