import React, { FC, ReactElement } from "react";
import s from "./cardsItem.module.scss";

interface PropsCardsItem {
  imgSrc: string;
  classes: string;
  //children: ReactElement<HTMLImageElement>, ;
  children: ReactElement<HTMLElement>[];
}
export const CardsItem: FC<PropsCardsItem> = ({
  imgSrc,
  classes,
  children,
}) => {
  return (
    <div className={s.cardsItem}>
      <div className={s.__logo}>
        <img
          className={`${classes === "team" ? s.team : s.player}`}
          src={imgSrc}
          alt={imgSrc}
        />
      </div>
      <div className={s.cardsInfo}>
        <div className={s.__position}>
          {/*  */}
          {children}
          {/*  */}
        </div>
      </div>
    </div>
  );
};
