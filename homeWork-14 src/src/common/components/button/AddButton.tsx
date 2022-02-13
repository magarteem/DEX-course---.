import React from "react";
import s from "./button.module.scss";

export const AddButton = () => {
  return (
    <button disabled={false} className={s.btnAdd}>
      Add +
    </button>
  );
};
