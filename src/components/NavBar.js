import React, { Fragment, useState } from "react";
import { ReactComponent as Menu } from "../assets/icon-menu.svg";
import { ReactComponent as MenuClose } from "../assets/icon-close.svg";
import logo from "../assets/GT2022.svg";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const [navMenu, setNavMenu] = useState(false);

  // Function to Toggle Menu
  const toggleMenuHandler = () => {
    setNavMenu((menu) => !menu);
  };

  return (
    <Fragment>
      <header>
        <nav className={classes.navWrapper}>
          <div className={classes.imageWrapper}>
            <img src={logo} alt='company logo' />
          </div>
          <div className={classes.linkContainer}>
            {!navMenu && (
              <div className={classes.menuContainer}>
                <Menu onClick={toggleMenuHandler} />
              </div>
            )}
            {navMenu && (
              <>
                <div className={classes.closeContainer}>
                  <MenuClose fill='white' onClick={toggleMenuHandler} />
                </div>

                <ul className={classes.linkWrapper}>
                  <div className={classes.linkGroup}>
                    <li>
                      <NavLink to='signin'>Log in</NavLink>
                    </li>
                    <li>
                      <NavLink to='/signup'>Sign up</NavLink>
                    </li>
                  </div>
                  <div className={classes.linkGroup}>
                    <li>
                      <NavLink>Overview</NavLink>
                    </li>
                    <li>
                      <NavLink>Solutions</NavLink>
                    </li>
                    <li>
                      <NavLink>Pricing</NavLink>
                    </li>
                    <li>
                      <NavLink>Blog</NavLink>
                    </li>
                  </div>
                </ul>
              </>
            )}
            <ul className={classes.linkWrapperLarge}>
              <div className={classes.linkGroup}>
                <li>
                  <NavLink to='/signin'>Log in</NavLink>
                </li>
                <li>
                  <NavLink to='/signup'>Sign up</NavLink>
                </li>
              </div>
              <div className={classes.linkGroup}>
                <li>
                  <NavLink>Overview</NavLink>
                </li>
                <li>
                  <NavLink>Solutions</NavLink>
                </li>
                <li>
                  <NavLink>Pricing</NavLink>
                </li>
                <li>
                  <NavLink>Blog</NavLink>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
