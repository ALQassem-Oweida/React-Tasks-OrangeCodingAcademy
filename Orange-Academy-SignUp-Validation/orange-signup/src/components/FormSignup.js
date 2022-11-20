import React, { useState } from "react";

function FormSignup() {
  const initalValues = { email: "", password: "", phone: "" };
  const [formValues, setFormValues] = useState(initalValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const Data = JSON.parse(localStorage.getItem("usersData")) || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.values(formErrors).length === 0 && isSubmit) {
      var data = JSON.parse(localStorage.getItem("usersData")) || [];
      var ToF = "false";
      for (var i = 0; i < Data.length; i++) {
        var user = data[i];
        var email = user.email;
        if (email === formValues.email) {
          ToF = "true";
          //  formErrors.email="This email is used Please try another one";

          const elem = document.getElementById("emailexiset");
          elem.innerHTML = "Email is already exist Please try another one";
        } else {
          continue;
        }
      }

      if (ToF === "false") {
        Data.push(formValues);
        localStorage.setItem("usersData", JSON.stringify(Data));
        const succsss = document.getElementById("succsss");
        succsss.innerHTML = "Thank you for regestration";
        const elem = document.getElementById("emailexiset");
        elem.innerHTML = "";

        return setFormValues(
          {
            email:"",
            phone:"",
            password:"",
    
          }
           );



      } else {
        setIsSubmit(
          (formErrors.email = "This email is used Please try another one")
        );
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email";
    }

    const pregex = /^[0-9]*$/;

    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!pregex.test(values.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    // const passRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 7) {
      errors.password = "Password must be 8 characters or more";
    } else if (values.password.length > 12) {
      errors.password = "Password must be 12 characters or less";
    }
    // else if (!passRegex.test(values.password)){
    //     errors.password = "Password must contain at least one letter, one number and one special character";
    // }

    return errors;
  };

  return (
    <div className="form-section">
      {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}

      <form className="Main_form" id="FormSub" onSubmit={handleSubmit}>
        <h2>Create an account</h2>
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div  className="succsss">Thank you for regestration</div>
        ) : (
          <div className="errors"></div>
        )} */}
        <div id="succsss" className="succsss"></div>
        <br />
        <label>
          <span className="S2">Email address </span>
          <span className="S1">*</span>
        </label>
        <input
          id="xEmail"
          name="email"
          type="text"
          value={formValues.email}
          onChange={handleChange}
        />
        <p id="emailexiset" className="errors">
          {formErrors.email}
        </p>

        <address>eg: username@domain.com</address>

        <label>
          <span className="S2">Mobile </span>
          <span className="S1">*</span>
        </label>
        <input
          id="xTel"
          name="phone"
          type="text"
          value={formValues.phone}
          onChange={handleChange}
        />

        <p className="errors">{formErrors.phone}</p>

        <address>eg: 077********</address>

        <label>
          <span className="S2">Create Password</span>{" "}
          <span className="S1">*</span>
        </label>
        <div id="flotEyeBox">
          <input
            id="xPass"
            name="password"
            type="password"
            style={{ width: "95%" }}
            value={formValues.password}
            onChange={handleChange}
          />

          <i className="far fa-eye" id="togglePassword"></i>
        </div>

        <p className="errors">{formErrors.password}</p>

        <div className="fcheck">
          <input className="ch1" type="checkbox" required />
          <label>
            agree to the terms & conditions Orange.{" "}
            <span className="S1">*</span>
          </label>{" "}
        </div>
        <div className="fcheck">
          <input className="ch1" type="checkbox" />
          <label>
            Receive Coding Academy Newsletter. <span className="S1">*</span>
          </label>{" "}
        </div>

        <button id="B1" type="submit">
          Sign Up
        </button>
        <br />
        <button id="B2" type="button">
          <a id="bot" href="./index_log in.html">
            Already have an account?Log in
          </a>
        </button>
      </form>
    </div>
  );
}

export default FormSignup;
