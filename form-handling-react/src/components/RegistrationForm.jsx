import React from "react";
function RegistrationForm() {
  return (
    <form>
      <fieldset style={{ textAlign: "center" }}>
        <legend>Form</legend>
        <label htmlFor="usrname">
          Name: <input type="text" id="username" />
        </label>{" "}
        <br /> <br />
        <label htmlFor="email">
          Email: <input type="text" id="email" />
        </label>{" "}
        <br /> <br />
        <label htmlFor="password">
          Password: <input type="password" id="password" />
        </label>
      </fieldset>
      <button
        type="submit"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          marginTop: "4px",
        }}
      >
        Submit
      </button>{" "}
      <br />
      <button
        type="reset"
        style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
      >
        Reset
      </button>
    </form>
  );
}
export default RegistrationForm;
