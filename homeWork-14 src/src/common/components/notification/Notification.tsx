import React from "react";
import s from "./notification.module.scss";

export const Notification = () => {
  return (
    <div className={s.notification}>
      User with the specified username / password was not found.
    </div>
  );
};
