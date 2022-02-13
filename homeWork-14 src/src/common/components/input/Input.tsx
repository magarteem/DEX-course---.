import React from "react";
import s from "./input.module.scss";
import eyeIcon from "../../../assets/icons/eye.svg";
import close_eyeIcon from "../../../assets/icons/close_eye.svg";

interface Props {
  type?: string;
  pass?: boolean;
  inputLabel?: string;
  setPassFu?: () => void;
}

export const Input = ({ type, pass = true, setPassFu, inputLabel }: Props) => {
  const error = false; //обработка ошибок

  return (
    <div style={{ display: "flex" }}>
      <label className={s.inp}>
        <span className={s.title}>{inputLabel}</span>
        <input type={pass ? type : "text"} disabled={false} />

        {type === "password" &&
          (pass ? (
            <img src={eyeIcon} alt="eye" onClick={setPassFu} />
          ) : (
            <img src={close_eyeIcon} alt="close_eye" onClick={setPassFu} />
          ))}

        {error && <span className={s.error}>Required</span>}
      </label>
    </div>
  );
};
