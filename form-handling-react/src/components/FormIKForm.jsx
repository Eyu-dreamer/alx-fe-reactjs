import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Form validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Submit the form data (this could be an API call)
        console.log("Form data:", values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="username"> Username </label>{" "}
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
          <ErrorMessage name="username" component="p" />
        </div>{" "}
        <div>
          <label htmlFor="email"> Email </label>{" "}
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="p" />
        </div>{" "}
        <div>
          <label htmlFor="password"> Password </label>{" "}
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="p" />
        </div>{" "}
        <button type="submit"> Register </button>{" "}
      </Form>{" "}
    </Formik>
  );
};

export default FormikForm;
