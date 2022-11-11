import React from "react";
import image from "../assets/laptop.svg";
import classes from "./SideBackground.module.css";

const SideBackground = () => {
  return (
    <div className={classes.background}>
      <div>
        <div className={classes.imageContanier}>
          <img src={image} alt='office' />
        </div>
        <p className={classes.welcome_p}>Welcome to your dashboard</p>
        <p className={classes.signin_p}>Signin to explore features</p>
      </div>
    </div>
  );
};

export default SideBackground;
