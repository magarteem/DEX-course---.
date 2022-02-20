import React from "react";
import s from "./cards.module.scss";
import { CardsItem } from "../../../../../../common/components/cardsItem/CardsItem";
import team_1 from "../../../../../../assets/images/team/team_1.png";
import team_2 from "../../../../../../assets/images/team/team_2.png";
import team_3 from "../../../../../../assets/images/team/team_3.png";
import team_4 from "../../../../../../assets/images/team/team_4.png";
import team_5 from "../../../../../../assets/images/team/team_5.png";
import team_6 from "../../../../../../assets/images/team/team_6.png";

interface teamType {
  id: number;
  teamName: string;
  foundatione: string;
  imgSrc: string;
}
const cardData: teamType[] = [
  { id: 1, teamName: "Alex", foundatione: "1970", imgSrc: team_1 },
  { id: 2, teamName: "Man", foundatione: "1971", imgSrc: team_2 },
  { id: 3, teamName: "Pop", foundatione: "1972", imgSrc: team_3 },
  { id: 4, teamName: "Eugen", foundatione: "1973", imgSrc: team_4 },
  { id: 5, teamName: "Mixael", foundatione: "1974", imgSrc: team_5 },
  { id: 6, teamName: "Lexa", foundatione: "1975", imgSrc: team_6 },
  { id: 7, teamName: "Mixael", foundatione: "1974", imgSrc: team_5 },
  { id: 8, teamName: "Lexa", foundatione: "1975", imgSrc: team_6 },
  { id: 9, teamName: "Mixael", foundatione: "1974", imgSrc: team_5 },
  { id: 10, teamName: "Lexa", foundatione: "1975", imgSrc: team_6 },
];

export const CardsTeam = () => {
  return (
    <div className={s.cards}>
      {cardData.map((el) => (
        <CardsItem key={el.id} imgSrc={el.imgSrc} classes="team">
          <h2>{el.teamName}</h2>
          <span className={s.__foundatione}>{el.foundatione}</span>
        </CardsItem>
      ))}
    </div>
  );
};
