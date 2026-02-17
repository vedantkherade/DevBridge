import React, { useState } from "react";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams
import newRequest from "../../utils/newRequest";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  
  const { token } = useParams(); // Get token from URL
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Matches your backend route
      await newRequest.post("/auth/reset-password", {
        token, 
        password
      });
      setMessage("Password reset successful! Redirecting to login...");
      
      // Optional: Redirect after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      
    } catch (err) {
      setError(err.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <label htmlFor="">New Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter new password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Reset Password</button>
        
        {message && <span style={{ color: "green" }}>{message}</span>}
        {error && <span style={{ color: "red" }}>{error}</span>}
      </form>
    </div>
  );
}

export default ResetPassword;
