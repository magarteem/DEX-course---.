import React from "react";
import s from "./autharization.module.scss";
import signIn from "../../../assets/images/signIn.png";
import { Route, Routes } from "react-router-dom";
import { SignInForm } from "./signIn/SignInForm";
import { SignUpForm } from "./signUp/SignUpForm";

export const Autharization = () => {
  return (
    <>
      <Routes>
        {/*<Route>
          <Route index element={<SignInForm />} />
          <Route path="sign-up" element={<SignUpForm />} />
        </Route>*/}
      </Routes>
    </>
  );
};
