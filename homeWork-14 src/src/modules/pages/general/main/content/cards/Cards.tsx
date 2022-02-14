import React from "react";
import { CardsItem } from "../../../../../../common/components/cardsItem/CardsItem";
import s from "./cards.module.scss";

export const Cards = () => {
  return (
    <div className={s.cards}>
      <CardsItem />
      <CardsItem />
      <CardsItem />
      <CardsItem />
      <CardsItem />
      {/*<CardsItem />
      <CardsItem />
      <CardsItem />*/}
    </div>
  );
};
