import React from "react";
import { useFormik } from "formik"; 

function App() {
 
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Field required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Username should be an email";
      }

      if (!values.password) {
        errors.password = "Field required";
      }

      return errors;
    },
    onSubmit: (values) => {
      // Show the "Login Successful" message in an alert box
      alert("Login Successful");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email:</label>
          <input
            type="email"
            id="emailField"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <div id="emailError">{formik.errors.email}</div>} {/* Step 3: Display error message */}
        </div>

        <div>
          <label htmlFor="pswField">Password:</label>
          <input
            type="password"
            id="pswField"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && <div id="pswError">{formik.errors.password}</div>} {/* Step 3: Display error message */}
        </div>

        <button type="submit" id="submitBtn">Submit</button> {/* Step 4: Implement the submit button */}
      </form>
    </div>
  );
}

export default App;

