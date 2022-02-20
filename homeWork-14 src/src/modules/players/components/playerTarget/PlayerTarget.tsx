import React from "react";
import s from "./playerTarget.module.scss";
import pencil from "../../../../assets/icons/pencil.svg";
import deleteImg from "../../../../assets/icons/delete.svg";
import playerPhoto from "../../../../assets/icons/playerPhoto.webp";

export const PlayerTarget = () => {
  return (
    <div className={s.cardTeam}>
      <div className={s.teamTitle}>
        <span>
          Players <span className={s.teamTitle__text}>/</span> Greg Whittington
        </span>
        <div className={s.iconEdit}>
          <img src={pencil} alt="edit" />
          <img src={deleteImg} alt="delete" />
        </div>
      </div>

      <div className={s.playerInfo}>
        <div className={s.playerLogo}>
          <img src={playerPhoto} alt="playerPhoto" />
        </div>
        <div className={s.playerText}>
          <h1>
            Greg Whittington
            <b className={s.playerTitle__text}> #22</b>
          </h1>
          <div className={s.__playerFlexText}>
            <div className={s.playerLeft50}>
              <div>
                <h4>Position</h4>
                <span>Forward</span>
              </div>
              <div>
                <h4>Height</h4>
                <span>206 cm</span>
              </div>
              <div>
                <h4>Age</h4>
                <span>27</span>
              </div>
            </div>
            <div className={s.playerRig50}>
              <div>
                <h4>Team</h4>
                <span>Denver Nuggets</span>
              </div>
              <div>
                <h4>Weight</h4>
                <span>95 kg</span>
              </div>
              <div className={s.emptyBlock}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
