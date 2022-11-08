import React, { useState } from "react";
import styles from "./Styles/Forgotpassword.module.css";
import bg_image from "../assets/undraw_secure_login_pdn4 2.svg";
import PasswordStrengthBar from "react-password-strength-bar";

function OtpContent() {
  const [password, setPassword] = useState();
  const [passwordScore, setPasswordScore] = useState();

  return (
    <div className={styles.forgotpassword}>
      <div className={styles.form}>
        <div className={styles.form_container}>
          <div className={styles.formhead}>
            <h2>Verify account</h2>
            <h3>Verify your account</h3>
          </div>

          <form>
            <div className={styles.input_group}>
              <label>Email</label>
              <div className={styles.input_otp}>
                <input type="email" placeholder="anderson@gmail.com" />
                <button style={{color: "white", background: "#01A8F8"}}>Send OTP</button>
              </div>
            </div>
            <div className={styles.input_group}>
              <label>OTP</label>
              <input
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
            </div>
            
            <input
              type="submit"
              value="Continue"
              className={styles.pass_submit}
            />
          </form>
        </div>
      </div>
      <div className={styles.bg_image}>
        <img src={bg_image} alt="" />
        <div className={styles.bg_image__text}>
          <h2>Welcome to your dashboard</h2>
          <h3>Signin to explore new features</h3>
        </div>
      </div>
    </div>
  );
};

export default OtpContent;
