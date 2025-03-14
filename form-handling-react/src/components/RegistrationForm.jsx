import React from "react";
import { useState } from "react";
function RegistrationForm() {
  // first grab values inputted by users in the form input elements.
  // to grab values from the input elements we use the useState hook to store the values inputted by users.
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });
  // then validate values before we do submition.
  const newError = { username: '', email: '', password: '' };
  function handleSubmit(e) {
e.preventDefault(); // to stop form submition.
let valid =  true;
if(!username) {
  newError.username = "Invalid username";
  setErrors(newError)
  valid= false;
}
if(!email) {
  newError.email= "Invalid email";
  setErrors(newError)
  valid= false;
}
if(!password) {
  newError.password = "Invalid password";
  setErrors(newError)
  valid= false;
}
if(!valid) {
  setErrors(newError);
  return;
}
e.target.submit();
  }
  return (
    <form style={formStyles} onSubmit={}>
      <fieldset style={fieldsetStyles}>
        <legend>Form</legend>

        <label htmlFor="username" style={labelStyles}>
          Name:
          <input
            type="text"
            id="username"
            style={inputStyles}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>

        <br />
        <br />

        <label htmlFor="email" style={labelStyles}>
          Email:
          <input
            type="email"
            id="email"
            style={inputStyles}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>

        <br />
        <br />

        <label htmlFor="password" style={labelStyles}>
          Password:
          <input
            type="password"
            id="password"
            style={inputStyles}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </fieldset>

      <button type="submit" style={buttonStyles}>
        Submit
      </button>

      <br />

      <button type="reset" style={buttonStyles}>
        Reset
      </button>
    </form>
  );
}

// Inline styles
const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  maxWidth: "500px",
  margin: "auto",
};

const fieldsetStyles = {
  border: "1px solid #ccc",
  padding: "20px",
  width: "100%",
  borderRadius: "8px",
  marginBottom: "20px",
};

const labelStyles = {
  display: "block",
  marginBottom: "8px",
  fontSize: "16px",
};

const inputStyles = {
  width: "100%",
  padding: "8px",
  marginTop: "4px",
  marginBottom: "12px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyles = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  fontSize: "16px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginBottom: "10px",
};

export default RegistrationForm;
