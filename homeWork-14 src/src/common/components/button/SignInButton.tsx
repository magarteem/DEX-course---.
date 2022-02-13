import React from "react";
import s from "./button.module.scss";

export const SignInButton = () => {
  return (
    <div style={{ display: "flex" }}>
      <button disabled={false} className={s.btn}>
        Sign In
      </button>
    </div>
  );
};
