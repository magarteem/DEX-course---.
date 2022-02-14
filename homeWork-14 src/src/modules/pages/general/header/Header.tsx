import React from "react";
import s from "./header.module.scss";
import logo from "../../../../assets/icons/logo.webp";
import userIcon from "../../../../assets/icons/userIcon.webp";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.contentHeader}>
        <div className={s.burger375px}>
          <span className={s.spanBurger}></span>
        </div>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.infoUser}>
          <span>John Smith</span>
          <img src={userIcon} alt="userIcon" />
        </div>
      </div>
    </header>
  );
};
