import { useState } from "react";
import st from "../autharization.module.scss";
import s from "../form/form.module.scss";
import { LinkElements } from "../../../../common/components/link/LinkElement";
import { Input } from "../../../../common/components/input/Input";
import signIn from "../../../../assets/images/signIn.png";
import { useForm } from "react-hook-form";
import { InButton } from "../../../../common/components/button/InButton";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const [eye, setEye] = useState(true);
  const passWatchFu = () => {
    setEye((prev) => !prev);
  };

  const navigate = useNavigate();
  const goHome = () => navigate("/", { replace: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => {
    console.log("Отправлено: ", data);
    goHome();
  };
  return (
    <div className={s.test}>
      <section className={st.autharization}>
        <div className={s.formAuth}>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.paddingInp}>
              <Input inputLabel="Login" errors={errors.login && errors.login}>
                <input
                  {...register("login", {
                    required: "Wrong login. Please, try again.",
                  })}
                />
              </Input>
            </div>

            <div className={s.paddingInp}>
              <Input
                eye={eye}
                pass={true}
                passWatchFu={passWatchFu}
                inputLabel="Password"
                errors={errors.password && errors.password}
              >
                <input
                  type={eye ? "password" : "text"}
                  {...register("password", {
                    required: "Wrong password. Please, try again.",
                    minLength: { value: 3, message: "не менее 3х символов" },
                  })}
                />
              </Input>
            </div>

            <InButton textButton="Sign In" />
            <div className={s.memberPass}>
              <span>
                Not a member yet?&ensp;
                <LinkElements to="/up">Sign up</LinkElements>
              </span>
            </div>
          </form>
        </div>
      </section>

      <section className={st.autharizationImg}>
        <img src={signIn} alt="signIn" />
      </section>
    </div>
  );
};
