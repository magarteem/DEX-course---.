import { useState } from "react";
import s from "./form.module.scss";
import { LinkElements } from "../../common/components/link/LinkElement";
import { Input } from "../../common/components/input/Input";
import signIn from "../../assets/images/signIn.png";
import { useForm } from "react-hook-form";
import { InButton } from "../../common/components/button/InButton";
import { useAppDispatch } from "../../core/redux/app/hooks";
import { login } from "../../modules/autharization/signInSlise";
import { useNavigate } from "react-router-dom";
import { signInThunk } from "../../core/redux/thunk/SignInThunk";

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goHome = () => navigate("/player", { replace: false });
  const onSubmit = (data: any) => {
    console.log("Отправлено: ", data);
    //dispatch(login());
    dispatch(signInThunk());
    goHome();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  //----- сравнение паролей
  const [eye, setEye] = useState(true);
  const passWatchFu = () => {
    setEye((prev) => !prev);
  };

  return (
    <section className={s.containerAuth}>
      <div className={s.autharization}>
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
                <LinkElements to="/registration">Sign up</LinkElements>
              </span>
            </div>
          </form>
        </div>
      </div>

      <div className={s.autharizationImg}>
        <img src={signIn} alt="signIn" />
      </div>
    </section>
  );
};
