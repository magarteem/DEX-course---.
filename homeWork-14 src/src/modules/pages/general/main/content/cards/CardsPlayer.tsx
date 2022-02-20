import React from "react";
import s from "./cards.module.scss";
import { CardsItem } from "../../../../../../common/components/cardsItem/CardsItem";
import player_1 from "../../../../../../assets/images/player/player_1.png";
import player_2 from "../../../../../../assets/images/player/player_2.png";
import player_3 from "../../../../../../assets/images/player/player_3.png";
import player_4 from "../../../../../../assets/images/player/player_4.png";
import player_5 from "../../../../../../assets/images/player/player_5.png";
import player_6 from "../../../../../../assets/images/player/player_6.png";

interface playerType {
  id: number;
  playerName: string;
  infoText: string;
  imgSrc: string;
}
const cardData: playerType[] = [
  {
    id: 1,
    playerName: "Jaylen Adams #10",
    infoText: "Portland trail blazers",
    imgSrc: player_1,
  },
  {
    id: 2,
    playerName: "Kyle Anderson #1",
    infoText: "Memphis Grizzlies",
    imgSrc: player_2,
  },
  {
    id: 3,
    playerName: "Malik Beasley #5",
    infoText: "Minnesota timberwolves",
    imgSrc: player_3,
  },
  {
    id: 4,
    playerName: "Troy Daniels #30",
    infoText: "Denver Nuggets",
    imgSrc: player_4,
  },
  {
    id: 5,
    playerName: "Danilo Gallinari #8",
    infoText: "Oklahoma city thunder",
    imgSrc: player_5,
  },
  {
    id: 6,
    playerName: "Danilo Gallinari #8",
    infoText: "Oklahoma city thunder",
    imgSrc: player_5,
  },
  {
    id: 7,
    playerName: "Al Horford #42",
    infoText: "Philadelphia seventy sixers",
    imgSrc: player_6,
  },
];

export const CardsPlayer = () => {
  return (
    <div className={s.cards}>
      {cardData.map((el) => (
        <CardsItem key={el.id} imgSrc={el.imgSrc} classes="player">
          <h2>{el.playerName}</h2>
          <span className={s.__foundatione}>{el.infoText}</span>
        </CardsItem>
      ))}
    </div>
  );
};
