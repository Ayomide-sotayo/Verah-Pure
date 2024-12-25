import "../components/css/Footer.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              At Verah Cosmetics, we believe beauty is more than skin deep. Our
              mission is to empower individuals with high-quality, cruelty-free
              products designed to enhance confidence and celebrate diversity.
              From luxurious lipsticks to nourishing skincare, each product is
              crafted with care and a commitment to excellence. Discover your
              unique beauty with Verah Cosmetics – where elegance meets
              empowerment.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <img src="/src/assets/logo.png" alt="" className="bg-light p-3 rounded" />
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#About">About Us</a>
              </li>
              <li>
                <a href="#Contact">Contact Us</a>
              </li>
              <li>
                <a href="#Blog">
                  Blog
                </a>
              </li>
              <li>
                <NavLink to="/shop">
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2025 All Rights Reserved by
              <a href="#"> vera pure cosmetics</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="bi bi-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
