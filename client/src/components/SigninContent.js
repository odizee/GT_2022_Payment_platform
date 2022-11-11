import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import AuthHeader from "./AuthHeader";
import classes from "./SigninContent.module.css";
import image from "../assets/laptop.svg";
import NavBar from "./NavBar";

const SigninContent = () => {
  return (
    <Fragment>
      <NavBar />
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <AuthHeader
            title='Login'
            description='Welcome, please enter your details'
          />
          <form>
            <div className={classes.input}>
              <label>Email</label>
              <input type='email' placeholder='anderson@gmail.com' />
            </div>
            <div className={classes.input}>
              <label>Password</label>
              <input type='password' placeholder='password' />
            </div>
          </form>
          <p className={classes.forgetPassword}>
            <NavLink to='/forgotpassword'>Forgot password </NavLink>
          </p>
          <button type='submit' className={classes.button}>
            Login
          </button>
        </div>
        <div className={classes.background}>
          <div>
            <div className={classes.imageContanier}>
              <img src={image} alt='office' />
            </div>
            <p className={classes.welcome_p}>Welcome to your dashboard</p>
            <p className={classes.signin_p}>Signin to explore features</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SigninContent;
