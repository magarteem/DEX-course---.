import React from "react";
import { AddButton } from "../../../../../../common/components/button/AddButton";
import { Search } from "../../../../../../common/components/search/Search";
import s from "./headContent.module.scss";

export const HeadContent = () => {
  return (
    <div className={s.headContent}>
      <Search />
      <AddButton />
    </div>
  );
};
