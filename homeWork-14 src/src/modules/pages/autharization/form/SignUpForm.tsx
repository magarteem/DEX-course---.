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
      <h1>Sign Up</h1>
      <form>
        <div className={s.paddingInp}>
          <Input type="text" inputLabel="Name" />
        </div>
        <div className={s.paddingInp}>
          <Input type="text" inputLabel="Login" />
        </div>

        <div className={s.paddingInp}>
          <Input
            type="password"
            pass={pass}
            setPassFu={setPassFu}
            inputLabel="Password"
          />
        </div>
        <div className={s.paddingInp}>
          <Input
            type="password"
            pass={pass}
            setPassFu={setPassFu}
            inputLabel="Enter your password again"
          />
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
