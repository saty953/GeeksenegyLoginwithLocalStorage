import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("please fill all details");
    }

    const val = localStorage.getItem("email");
    const val2 = localStorage.getItem("password");
    if (val === email && val2 === password) {
      alert("successfully login");
      navigate("/fetchdetails");
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{marginTop:"20vh"}}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2>Log in to your account</h2>
          <div className="form-group">
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="form-control"
              style={styles.input}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="form-control"
              style={styles.input}
            />
          </div>
          <button style={styles.submitButton} type="submit" className="btn btn-primary btn-block">
            Log in
          </button>
          <h6 style={{display:"inline"}}>If not logged  SignUp first</h6>
          <button style={styles.signUpButton} onClick={() => navigate("/signup")}>Signup</button>
        </form>
      </div>
    </div>
  );
}
const styles = {
  form: {
    width: "90%",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  label: {
    display: "inline-block",
    width: "30%",
    minWidth: "100px",
    fontWeight: "bold",
    marginRight: "2%",
    textAlign: "left",
    verticalAlign: "middle",
    marginBottom:"5px"
  },
  input: {
    display: "inline-block",
    width: "90%",
    minWidth: "200px",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    verticalAlign: "middle",
  },
  submitButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    marginBottom: "10px",
    cursor: "pointer",
    marginTop:"10px"
  },
  signUpButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#6c757d",
    color: "#fff",
    cursor: "pointer",
    marginTop:"10px"
  },
};

export default LoginForm;
