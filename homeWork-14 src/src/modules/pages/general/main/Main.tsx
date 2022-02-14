import React from "react";
import { Aside } from "./aside/Aside";
import { Content } from "./content/Content";
import s from "./main.module.scss";

export const Main = () => {
  return (
    <main className={s.main}>
      <Aside />
      <Content />
    </main>
  );
};
