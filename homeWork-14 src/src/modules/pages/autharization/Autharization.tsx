import React from "react";
import s from "./autharization.module.scss";
import { SignInForm } from "./form/SignInForm";
import signIn from "../../../assets/images/signIn.png";
import { SignUpForm } from "./form/SignUpForm";

export const Autharization = () => {
  return (
    <>
      <section className={s.autharization}>
        <SignInForm />
        {/*<SignUpForm />*/}
      </section>

      <section className={s.autharizationImg}>
        <img src={signIn} alt="signIn" />
      </section>
    </>
  );
};
