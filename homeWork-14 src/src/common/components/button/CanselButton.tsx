import React from "react";
import s from "./button.module.scss";

export const CanselButton = () => {
  return (
    <button disabled={false} className={s.btnCancel}>
      Cancel
    </button>
  );
};
