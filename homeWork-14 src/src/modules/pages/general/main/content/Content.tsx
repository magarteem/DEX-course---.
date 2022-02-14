import React from "react";
import { Cards } from "./cards/Cards";
import s from "./content.module.scss";
import { HeadContent } from "./headContent/HeadContent";
import { Pagination } from "./pagination/Pagination";

export const Content = () => {
  return (
    <section className={s.content}>
      <HeadContent />
      <Cards />
      <Pagination />
    </section>
  );
};
