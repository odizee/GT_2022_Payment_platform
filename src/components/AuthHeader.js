import React from "react";
import classes from "./AuthHeader.module.css";

const AuthHeader = ({ title, description }) => {
  return (
    <div className={classes.header}>
      <h1>{title}</h1>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default AuthHeader;
