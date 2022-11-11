import React, { Fragment, useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import AuthHeader from "./AuthHeader";
import NavBar from "./NavBar";
import SideBackground from "./SideBackground";
import classes from "./SignupContent.module.css";

const SignupContent = () => {
  const [password, setPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Fragment>
      <NavBar />
      <div className={classes.container}>
        <div className={classes.leftSideWrapper}>
          <AuthHeader
            title='Create new account'
            description='Kindly fill the correct detals to get started'
          />
          <div className={classes.formContainer}>
            <form>
              <p className={classes.radioDescription}>
                What should we call you?
              </p>
              <div>
                <div className={classes.radioContainer}>
                  <span className={classes.radioGroup}>
                    <input
                      type='radio'
                      id='business'
                      className={classes.radioInput}
                    />
                    <label htmlFor='business'>Business</label>
                  </span>
                  <span className={classes.radioGroup}>
                    <input type='radio' id='client' />
                    <label htmlFor='client'>Client</label>
                  </span>
                  <span
                    className={`${classes.radioGroup} ${classes.customerRadio}`}
                  >
                    <input type='radio' id='customer' />
                    <label htmlFor='customer'>Customer</label>
                  </span>
                </div>
                <div className={classes.inputGroup}>
                  <span className={classes.name}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder='Anderson Banny' />
                  </span>
                  <span className={classes.number}>
                    <label htmlFor='number'>Phone Number</label>
                    <input id='number' type='number' placeholder='123456789' />
                  </span>
                </div>
                <div className={classes.addressContainer}>
                  <label htmlFor='address'>Address</label>
                  <input
                    type='address'
                    id='address'
                    placeholder='99 Ifako Ijaye Street'
                  />
                </div>
                <div className={classes.inputGroup}>
                  <span className={classes.email}>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      id='email'
                      placeholder='abanny@zojatech.com'
                    />
                  </span>
                  <span className={classes.username}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' placeholder='andybanny' />
                  </span>
                </div>
                <div className={classes.passwordGroup}>
                  <span className={classes.password}>
                    <label htmlFor='password'>Enter password</label>
                    <input
                      type='password'
                      id='password'
                      placeholder='******'
                      onChange={handlePassword}
                      value={password}
                    />
                  </span>
                  <span className={classes.confirmPassword}>
                    <label htmlFor='password'>Confirm password</label>
                    <input id='password' type='text' placeholder='******' />
                  </span>
                </div>
              </div>
            </form>
            <div>
              <p>Must have at least 6 characters</p>
              <PasswordStrengthBar password={password} />
              <div className={classes.textGroup}>
                By clicking Sign up you agree to our
                <span> &nbsp;Terms&nbsp;</span> and
                <span>&nbsp;Privacy Policy</span>
              </div>
            </div>
            <button type='submit' className={classes.createButton}>
              Create account
            </button>
          </div>
        </div>
        <SideBackground />
      </div>
    </Fragment>
  );
};

export default SignupContent;
