import React, { useState } from "react";
import "./styles.css"; // Reuse your login styles
import newRequest from "../../utils/newRequest";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    try {
      // Matches your backend route
      await newRequest.post("/auth/forget-password", { email });
      setMessage("Reset link has been sent to your email!");
    } catch (err) {
      setError(err.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="login"> {/* Reuse 'login' class for consistent styling */}
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <label htmlFor="">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
        
        {message && <span style={{ color: "green" }}>{message}</span>}
        {error && <span style={{ color: "red" }}>{error}</span>}
        
        <Link to="/login">Back to Login</Link>
      </form>
    </div>
  );
}

export default ForgetPassword;
