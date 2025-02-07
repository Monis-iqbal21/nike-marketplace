"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./login.css";
import { useUserContext } from "../../context/user";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUserContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors



    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // localStorage.setItem("user", JSON.stringify({ email: email }));
        
        login({ email: email });
        router.push("/");
         // Navigate to the home page
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
    }
  };

  return (
    <div className="login_container">
      <div className="logo_heading_div">
        <Image src="/images/logo2.png" alt="Nike logo" width={100} height={50} />
        <h2>YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
      </div>

      <form className="login_input_div" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email address"
          className="login_input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login_input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
        <button type="submit" className="login_btn">
          SIGN IN
        </button>
      </form>

      <div className="login_checkbox_forgot_div">
        <p style={{ fontSize: "12px", color: "#8D8D8D",display:"flex",alignItems:"center" }}>
          <input type="checkbox" style={{ width: "18px", height: "18px", accentColor: "white" }} />
          Keep me signed in
        </p>
        <button style={{ fontSize: "12px", color: "#BCBCBC" }}>
          Forgot your password?
        </button>
      </div>
      <p style={{ fontSize: "12px", color: "#8D8D8D", textAlign: "center" }}>
        By logging in, you agree to Nike's&nbsp;
        <span style={{ textDecoration: "underline" }}>Privacy Policy</span> &nbsp;and&nbsp;
        <span style={{ textDecoration: "underline" }}>Terms of Use</span>.
      </p>
      <p className="login_join_us" style={{fontSize:"15px",fontWeight:"500"}}>
        Not a Member? &nbsp;
        <Link
          href={"/pages/register"}
          style={{
            color: "black",
            fontWeight: "500",
            textDecoration: "underline",
          }}
        >
          Join Us
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;

