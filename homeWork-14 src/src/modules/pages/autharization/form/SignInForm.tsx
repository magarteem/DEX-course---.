import { useState } from "react";
import s from "./form.module.scss";
import { SignInButton } from "../../../../common/components/button/SignInButton";
import { LinkElements } from "../../../../common/components/link/LinkElement";
import { Input } from "../../../../common/components/input/Input";

export const SignInForm = () => {
  const [pass, setPass] = useState(true);

  const setPassFu = () => {
    setPass(!pass);
  };

  return (
    <div className={s.formAuth}>
      <h1>Sign In</h1>
      <form>
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
