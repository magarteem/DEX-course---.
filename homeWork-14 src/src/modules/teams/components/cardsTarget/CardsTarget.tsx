import React from "react";
import s from "./cardsTarget.module.scss";
import pencil from "../../../../assets/icons/pencil.svg";
import deleteImg from "../../../../assets/icons/delete.svg";
import teamLogo from "../../../../assets/icons/teamLogo.webp";

export const TeatCards = () => {
  return (
    <div className={s.cardTeam}>
      <div className={s.teamTitle}>
        <span>
          Teams <span className={s.teamTitle__text}>/</span> Denver Nuggets
        </span>
        <div className={s.iconEdit}>
          <img src={pencil} alt="edit" />
          <img src={deleteImg} alt="delete" />
        </div>
      </div>

      <div className={s.teamInfo}>
        <div className={s.teamLogo}>
          <img src={teamLogo} alt="teamLogo" />
        </div>
        <div className={s.teamText}>
          <h1>Denver Nuggets</h1>
          <div className={s.__flexText}>
            <div className={s.left50}>
              <div>
                <h4>Year of foundation</h4>
                <span>1976</span>
              </div>
              <div>
                <h4>Conference</h4>
                <span>Western</span>
              </div>
            </div>
            <div className={s.rig50}>
              <div>
                <h4>Division</h4>
                <span>Northwestern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
