import React, { useState } from "react";
import s from "./form.module.scss";
import { SignInButton } from "../../../../common/components/button/SignInButton";
import { LinkElements } from "../../../../common/components/link/LinkElement";
import { Input } from "../../../../common/components/input/Input";

export const SignUpForm = () => {
  const [pass, setPass] = useState(true);

  const setPassFu = () => {
    setPass(!pass);
  };

  return (
    <div className={s.formAuth}>
      <h1>Sign In</h1>
      <form>
        <div className={s.paddingInp}>
          <Input type="number" />
        </div>
        <div className={s.paddingInp}>
          <Input type="password" pass={pass} setPassFu={setPassFu} />
        </div>
        <SignInButton />
        <div className={s.memberPass}>
          <span>
            Not a member yet?&ensp;
            <LinkElements to="/sign-up">Sign up</LinkElements>
          </span>
        </div>
      </form>
    </div>
  );
};
