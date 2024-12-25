import "./css/Contact.css";
import owner from "../assets/owner.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="Contact" id="Contact">
      <div className="container">
        <h1 className="color dancing mb-3 text-center">Contact Us</h1>
        <div className="col-sm-12">
          <div className="row gap-5">
            {/* Left: Contact Form */}
            <div className="col-sm-7">
              <div className="form-container">
                <form className="form">
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="textarea" className="form-label">
                      How Can We Help You?
                    </label>
                    <textarea
                      name="textarea"
                      id="textarea"
                      rows="10"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <button
                    className="form-submit-btn btn btn-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Business Owner Card */}
            <div className="col-sm-4 ms-auto justify-content-center align-items-center">
              <div className="profile-card">
                <div className="image-container">
                  <img
                    src={owner}
                    alt="Business Owner"
                    className="profile-image"
                  />
                  <div className="overlay">
                    <h2 className="owner-name dancing-script">Akinkumi vera</h2>{" "}
                    {/* Replace with actual name */}
                  </div>
                </div>
                <div className="profile-details bg-light">
                  <div className="card3">
                    <span>Socials</span>
                    <a
                      className="social-link"
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="text-dark" />
                    </a>
                    <a
                      className="social-link"
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-dark" />
                    </a>
                    <a
                      className="social-link"
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-dark" />
                    </a>
                    <a
                      className="social-link"
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="text-dark" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
