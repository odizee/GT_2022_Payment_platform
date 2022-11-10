import React, { Fragment, useState } from "react";
import styles from "./Styles/Forgotpassword.module.css";
import bg_image from "../assets/undraw_secure_login_pdn4 2.svg";
import PasswordStrengthBar from "react-password-strength-bar";
import NavBar from "./NavBar";

const ForgotPasswordContent = () => {
  const [password, setPassword] = useState();
  const [passwordScore, setPasswordScore] = useState();

  return (
    <Fragment>
      <NavBar />
      <div className={styles.forgotpassword}>
        <div className={styles.form}>
          <div className={styles.form_container}>
            <div className={styles.formhead}>
              <h2>Forgot Password</h2>
              <h3>Fill in details to change password</h3>
            </div>

            <form>
              <div className={styles.input_group}>
                <label>Email</label>
                <div className={styles.input_otp}>
                  <input type='email' placeholder='anderson@gmail.com' />
                  <button>Send OTP</button>
                </div>
              </div>
              <div className={styles.input_group}>
                <label>New password</label>
                <input
                  type='password'
                  placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;'
                />
              </div>
              <div className={styles.input_group}>
                <label>Confirm password</label>
                <input
                  type='password'
                  name='password'
                  label='Password'
                  id='password'
                  autoComplete='current-password'
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                  placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;'
                />
              </div>
              <div className={styles.minimum_req}>
                <p>Must have at least 6 characters</p>
                <PasswordStrengthBar
                  password={password}
                  shortScoreWord='weak'
                  scoreWords={["weak", "weak", "good", "strong"]}
                  onChangeScore={setPasswordScore}
                />
              </div>
              <input
                type='submit'
                value='Change password'
                className={styles.pass_submit}
              />
            </form>
          </div>
        </div>
        <div className={styles.bg_image}>
          <img src={bg_image} alt='' />
          <div className={styles.bg_image__text}>
            <h2>Welcome to your dashboard</h2>
            <h3>Signin to explore new features</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPasswordContent;
