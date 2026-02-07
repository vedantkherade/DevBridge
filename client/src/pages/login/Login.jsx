import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);



 const handleChange = async(e) => {
    e.preventDefault();
    try{

      const res = await axios.post("http://localhost:4000/api/auth/login", {
        username,
        password
      }, {
        withCredentials: true
      });

      console.log(res)


    }catch(err){
      setError(err)
      console.log(err)
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleChange}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input type="text" name="username" placeholder="johndoe" onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="">Password</label>
        <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
