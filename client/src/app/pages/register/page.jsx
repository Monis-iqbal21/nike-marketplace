
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import logo from "../../../../public/images/logo2.png";
// import "./register.css";

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     dob: "",
//     country: "usa",
//     gender: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Basic validation
//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.email ||
//       !formData.password ||
//       !formData.gender
//     ) {
//       setError("Please fill in all required fields");
//       return;
//     }

//     // Submit data to the server or API
//     console.log("Form Data:", formData);
//     try {
//       const response = await fetch("http://localhost:5000/register", {
//         method: ["GET","POST"],
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("push baby")
//         router.push("/");
//       } else {
//         setError(data.error || "Invalid credentials");
//       }
//     } catch (err) {
//       setError("Failed to connect to the server. Please try again.");
//     }

//     // Clear form fields after successful submission
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       dob: "",
//       country: "usa",
//       gender: "",
//     });
//   };

//   return (
//     <div className="register_container">
//       <form onSubmit={handleSubmit}>
//         <div className="logo_headings_div">
//           <div>
//             <Image src={logo} alt="nike logo" />
//           </div>
//           <div className="heading_one">BECOME A NIKE MEMBER</div>
//           <div className="heading_two">
//             Create your Nike Member profile and get first access to the very
//             best of Nike products, inspiration, and community.
//           </div>
//         </div>

//         <div className="input_fields_div">
//           <input
//             type="email"
//             name="email"
//             className="basic_input"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             className="basic_input"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="firstName"
//             className="basic_input"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             className="basic_input"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           <input
//             type="date"
//             name="dob"
//             className="basic_input text_border"
//             placeholder="Date of Birth"
//             value={formData.dob}
//             onChange={handleChange}
//           />
//           <p className="birthday_text">
//             Get a Nike Member Reward every year on your Birthday.
//           </p>
//           <select
//             name="country"
//             className="basic_input text_border"
//             value={formData.country}
//             onChange={handleChange}
//           >
//             <option value="usa">USA</option>
//             <option value="canada">Canada</option>
//             <option value="uk">UK</option>
//             <option value="australia">Australia</option>
//           </select>
//           <div className="gender_btn_div text_border">
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 checked={formData.gender === "Male"}
//                 onChange={handleChange}
//               />
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 checked={formData.gender === "Female"}
//                 onChange={handleChange}
//               />
//               Female
//             </label>
//           </div>
//         </div>

//         <div className="check_emailsignup_div">
//           <input
//             type="checkbox"
//             style={{ width: "40px", height: "40px", accentColor: "white" }}
//           />
//           <label className="terms_conditions checkbox_label">
//             Sign up for emails to get updates from Nike on products, offers, and
//             your Member benefits
//           </label>
//         </div>

//         <p className="terms_conditions">
//           By creating an account, you agree to Nike's{" "}
//           <span style={{ textDecoration: "underline" }}>Privacy Policy</span>{" "}
//           and <span style={{ textDecoration: "underline" }}>Terms of Use.</span>
//         </p>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <button className="register_btn" type="submit">
//           JOIN US
//         </button>

//         <p style={{ textAlign: "center", color: "#8D8D8D" }}>
//           Already a Member?{" "}
//           <Link
//             href={"/pages/login"}
//             style={{
//               color: "black",
//               fontWeight: "500",
//               textDecoration: "underline",
//             }}
//           >
//             Sign In.
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;






















"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import logo from "../../../../public/images/logo2.png";
import "./register.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    country: "usa",
    gender: "",
  });

  const [error, setError] = useState("");
  const router = useRouter(); // Initialize router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.gender
    ) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      console.log("Submitting form data:", formData);

      const response = await fetch("http://localhost:5000/register", {
        method: "POST", // Corrected method
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        console.log("Registration successful:", data.message);
        router.push("/"); // Redirect to homepage
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      console.error("Connection error:", err);
      setError("Failed to connect to the server. Please try again.");
    }
  };

  return (
    <div className="register_container">
      <form onSubmit={handleSubmit}>
        <div className="logo_headings_div">
          <Image src={logo} alt="nike logo" />
          <div className="heading_one">BECOME A NIKE MEMBER</div>
          <div className="heading_two">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration, and community.
          </div>
        </div>

        <div className="input_fields_div">
          <input
            type="email"
            name="email"
            className="basic_input"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="basic_input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="firstName"
            className="basic_input"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            className="basic_input"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            className="basic_input text_border"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
          />
          <select
            name="country"
            className="basic_input text_border"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="australia">Australia</option>
          </select>
          <div className="gender_btn_div text_border">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="register_btn" type="submit">
          JOIN US
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
