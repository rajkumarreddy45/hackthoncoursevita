import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    recruiter: false,
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isRegister
      ? "http://localhost:5000/register"
      : "http://localhost:5000/login";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();

      if (response.ok) {
        setMessage(isRegister ? "Registration successful" : "Login successful");

        // Redirect based on the action
        if (isRegister) {
          navigate("/"); // Redirect to login page after registration
        } else {
          navigate("/home"); // Redirect to a different page (e.g., home) after login
        }
      } else {
        setMessage(result.message || "An error occurred");
      }
    } catch (error) {
      setMessage("Network error");
    }
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({
      fname: "",
      lname: "",
      username: "",
      password: "",
      email: "",
      recruiter: false,
    });
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {isRegister && (
          <>
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={formData.fname}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={formData.lname}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </>
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {isRegister && (
          <label style={styles.label}>
            <input
              type="checkbox"
              name="recruiter" // Ensure this matches the formData property
              checked={formData.recruiter}
              onChange={handleChange} // Uncommented and included
            />
            I am a recruiter
          </label>
        )}

        <button type="submit" style={styles.button}>
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      <button onClick={toggleForm} style={styles.toggleButton}>
        {isRegister
          ? "Already have an account? Login"
          : "Don’t have an account? Register"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage:
      'url("https://image.slidesdocs.com/responsive-images/background/simple-clean-creal-modern-portfolio-purple-powerpoint-background_40057f696b__960_540.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
  },
  input: {
    margin: "10px 0",
    padding: "12px",
    fontSize: "20px",
    border: "none",
    backgroundColor: "transparent",
    boxShadow: "1px 1px 5px #9393D9",
  },
  button: {
    marginTop: "5px",
    padding: "15px",
    backgroundColor: "#007BFF",
    fontSize: "20px",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  toggleButton: {
    marginTop: "20px",
    padding: "15px",
    fontSize: "15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  title: {
    color: "#9393d9", // Title color (optional)
  },
  label: {
    color: "#2562c4",
  },
};

export default LoginPage;
