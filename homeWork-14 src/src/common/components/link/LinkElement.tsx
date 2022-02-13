import React, { FC } from "react";
import { Link } from "react-router-dom";
import s from "./linkElement.module.scss";

interface Props {
  to: string;
  children: string;
}
export const LinkElements: FC<Props> = ({ to, children }) => {
  return (
    <Link className={s.link} to={to}>
      {children}
    </Link>
  );
};
