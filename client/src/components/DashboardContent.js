import React from "react";
import style from "./Styles/Dashboard.module.css";
const DashboardContent = () => {
  return (
    <div className={style.dashboard}>
      <div className={style.sidebar}>Sidebar</div>
      <div className={style.main}>Main</div>
    </div>
  );
};

export default DashboardContent;
