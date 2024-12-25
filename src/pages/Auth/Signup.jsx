import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "/src/firebase/Firebase.js"; // Import Firebase authentication
import "./css/Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To navigate after successful signup

  // Handle Signup with Firebase Authentication (Email/Password)
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // Redirect to login page after successful signup
    } catch (err) {
      setError("Error creating account. Please try again.");
    }
  };

  return (
    <section className="login-block">
      <div className="log-container container">
        <div className="row">
          <div className="col-md-4 login-sec1">
            <h2 className="text-center dancing">Create Account</h2>
            <form className="login-form" onSubmit={handleSignup}>
              {/* Username Field */}
              <div className="form-group">
                <label htmlFor="username" className="text-uppercase">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="text-uppercase">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="text-uppercase">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <div className="form-check mt-4">
                <button
                  type="submit"
                  className="btn btn-login float-right mx-3"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="copy-text">
              <small>
                Already have an account?{" "}
                <NavLink to="/login" className="text-primary">
                  Login
                </NavLink>
              </small>
            </div>
          </div>
          <div className="col-md-8 banner-sec">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src="/src/assets/Login.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="banner-text">
                      <img
                        src="/src/assets/Logo.png"
                        alt=""
                        className="logo2"
                      />
                      <h2 className="merriweather-bold">
                        Welcome to Verah Pure Cosmetics
                      </h2>
                      <p>
                        Buy Our Products Today And Your Skin Your Desired
                        Radiance
                      </p>
                    </div>
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

export default Signup;
