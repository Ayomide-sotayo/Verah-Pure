import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../Contexts/CartContext.jsx";

// eslint-disable-next-line react/prop-types
function Nav({ onLogout }) {
  // Receive onLogout as a prop
  const { getCartCount } = useCart(); // Access cart count
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleScroll = (id) => {
    if (window.location.pathname !== "/Home") {
      window.location.href = `/Home#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoutClick = () => {
    // Call the onLogout function to handle the logout
    onLogout();
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand dancing-script" href="/">
          <span className="color">Verah</span> Pure
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse fw-bold"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 merriweather-light">
            <li className="nav-item">
              <NavLink to="/Home" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => handleScroll("Blog")}
                style={{ cursor: "pointer" }}
              >
                Blog
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => handleScroll("Contact")}
                style={{ cursor: "pointer" }}
              >
                Contact
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => handleScroll("About")}
                style={{ cursor: "pointer" }}
              >
                About
              </span>
            </li>
            <li className="nav-item">
              <NavLink to="/Shop" className="nav-link">
                Shop
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <ul className="navbar-nav">
              {/* Cart Icon with item count */}
              <li className="nav-item mx-4">
                {/* Wrap the cart icon and count in a NavLink to navigate to /cart */}
                <NavLink to="/cart" className="nav-link">
                  <i className="bi bi-cart"></i>
                  <span className="cart-count">{getCartCount()}</span>
                </NavLink>
              </li>
              <li>
                <button
                  className="btn btn-outline-dark"
                  onClick={handleLogoutClick}
                >
                  Logout <i className="bi bi-box-arrow-right"></i>
                </button>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
