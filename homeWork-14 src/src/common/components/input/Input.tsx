import React, { FC } from "react";
import s from "./input.module.scss";
import { PropsInput } from "./types";
import eyeIcon from "../../../assets/icons/eye.svg";
import close_eyeIcon from "../../../assets/icons/close_eye.svg";

//======== input => {children} ========================
export const Input: FC<PropsInput> = ({
  inputLabel,
  errors,
  eye,
  pass,
  passWatchFu,
  children,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <label className={s.inp + " " + (errors && s.inpErrorValidation)}>
        <span className={s.title}>{inputLabel}</span>
        {children}
        {pass &&
          (eye ? (
            <img src={eyeIcon} alt="eye" onClick={passWatchFu} />
          ) : (
            <img src={close_eyeIcon} alt="close_eye" onClick={passWatchFu} />
          ))}
        {errors && <span className={s.error}>{errors?.message}</span>}
      </label>
    </div>
  );
};

//=========================================================
//interface Props {
//  type?: string;
//  pass?: boolean;
//  inputLabel?: string;
//  setPassFu?: () => void;
//}

//export const Input = ({ type, pass = true, setPassFu, inputLabel }: Props) => {
//  const error = false; //обработка ошибок

//  return (
//    <div style={{ display: "flex" }}>
//      <label className={s.inp}>
//        <span className={s.title}>{inputLabel}</span>
//        <input type={pass ? type : "text"} disabled={false} />

//        {type === "password" &&
//          (pass ? (
//            <img src={eyeIcon} alt="eye" onClick={setPassFu} />
//          ) : (
//            <img src={close_eyeIcon} alt="close_eye" onClick={setPassFu} />
//          ))}

//        {error && <span className={s.error}>Required</span>}
//      </label>
//    </div>
//  );
//};

// {/*<div className={s.paddingInp}>
//              <Input type="text" inputLabel="Login" />
//            </div>

//            <div className={s.paddingInp}>
//              <Input
//                type="password"
//                pass={pass}
//                setPassFu={setPassFu}
//                inputLabel="Password"
//              />
//            </div>*/}
