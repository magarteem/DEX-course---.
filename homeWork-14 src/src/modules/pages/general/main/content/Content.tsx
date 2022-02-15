import React from "react";
import { Outlet } from "react-router-dom";
import s from "./content.module.scss";
import { HeadContent } from "./headContent/HeadContent";
import { Pagination } from "./pagination/Pagination";

export const Content = () => {
  return (
    <section className={s.content}>
      <HeadContent />
      <Outlet />
      <Pagination />
    </section>
  );
};
