import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate =useNavigate();
   const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
        alert("Please fill all details")
      }
      else{
        alert('congratulations')
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        navigate("/")
      }
  };

  return (<div style={{marginTop:"16vh"}}>
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Create an account</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        style={styles.input}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        style={styles.input}
      />
     
      <label style={{textAlign: "left"}} htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        style={styles.input}
      />
   
    
      <button type="submit" style={styles.button}>Create account</button>
    </form>
    </div>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top:'25px',
    width: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default SignupForm;