import React, { FC } from "react";
import s from "./button.module.scss";

interface PropsButton {
  textButton: string;
  isValid?: boolean;
}

export const InButton = ({ textButton, isValid }: PropsButton) => {
  console.log(isValid);
  return (
    <div style={{ display: "flex" }}>
      <button disabled={!isValid} className={s.btn}>
        {textButton}
      </button>
    </div>
  );
};
