import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase.js"; // Import necessary functions
import "./css/Login.css";
function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin(); // Call onLogin to update the state in App.js
      navigate("/home"); // Navigate to home page
    } catch (err) {
      setError("Invalid login credentials.");
    }
  };
  return (
    <section className="login-block">
      <div className="log-container container">
        <div className="row">
          {/* Login Section */}
          <div className="col-md-4 login-sec">
            <h2 className="text-center dancing">Login Now</h2>
            <form className="login-form" onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="text-uppercase">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
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
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <div className="form-check mt-4">
                <button type="submit" className="btn btn-login">
                  Submit
                </button>
              </div>
              {/* Additional Links */}
              <small className="mt-4 text-center d-flex">
                <a href="/forgot-password" className="text-secondary me-auto">
                  Forgot Password?
                </a>
                <br />
                <NavLink to="/signup" className="text-primary">
                  Create an Account
                </NavLink>
              </small>
            </form>
          </div>

          {/* Banner Section */}
          <div className="col-md-8 banner-sec p-6">
            <div className="banner-text">
              <div className="logo2 col-md-3">

              </div>
              <h2 className="merriweather-bold">Welcome Back!</h2>
              <p>
                Login to access your personalized dashboard and enjoy seamless
                navigation. Stay connected with our features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
