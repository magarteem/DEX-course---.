import React, { useState } from "react";
import st from "../autharization.module.scss";
import s from "../form/form.module.scss";
import { LinkElements } from "../../../../common/components/link/LinkElement";
import signUp from "../../../../assets/images/signUp.png";
import { InButton } from "../../../../common/components/button/InButton";
import { useForm } from "react-hook-form";
import { Input } from "../../../../common/components/input/Input";
import { Сheckbox1 } from "../../../../common/components/checkbox/Сheckbox";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const [eye, setEye] = useState(true);
  const passWatchFu = () => {
    setEye((prev) => !prev);
  };

  const navigate = useNavigate();
  const goHome = () => navigate("/in", { replace: true });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => {
    console.log("Отправлено: ", data);
    goHome();
  };

  return (
    <div className={s.test}>
      <section className={st.autharization}>
        <div className={s.formAuth}>
          <h1>Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.paddingInp}>
              <Input inputLabel="Name" errors={errors.name && errors.name}>
                <input {...register("name", { required: "Required" })} />
              </Input>
            </div>

            <div className={s.paddingInp}>
              <Input inputLabel="Login" errors={errors.login && errors.login}>
                <input {...register("login", { required: "Required" })} />
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

            <div className={s.paddingInp}>
              <Input
                eye={eye}
                pass={true}
                passWatchFu={passWatchFu}
                inputLabel="Enter your password again"
                errors={errors.forgetPassworg && errors.forgetPassworg}
              >
                <input
                  type={eye ? "password" : "text"}
                  {...register("forgetPassworg", {
                    required: "Wrong password. Please, try again.",
                    minLength: { value: 3, message: "не менее 3х символов" },
                  })}
                />
              </Input>
            </div>

            <Сheckbox1
              textСheckbox="I accept the agreement"
              htmlForId="ce"
              errors={errors.checkbox && errors.checkbox}
            >
              <input
                id="ce"
                type="checkbox"
                disabled={false}
                {...register("checkbox", {
                  //required: "You must be accept the agreement.",
                })}
              />
            </Сheckbox1>

            <InButton textButton="Sign UP" isValid={isValid} />
            <div className={s.memberPass}>
              <span>
                Already a member? &ensp;
                <LinkElements to="/in">Sign Ip</LinkElements>
              </span>
            </div>
          </form>
        </div>
      </section>

      <section className={st.autharizationImg}>
        <img src={signUp} alt="signUp" />
      </section>
    </div>
  );
};
