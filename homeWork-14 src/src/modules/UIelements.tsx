//******************************************
//  Наглядный пример ==  https://home-work.jsx.su/
//******************************************

import { Link } from "react-router-dom";
import s from "./uielements.module.css";
import logo from "../../assets/icons/logo.webp";
import userIcon from "../../assets/icons/userIcon.webp";
import pencil from "../../assets/icons/pencil.svg";
import deleteImg from "../../assets/icons/delete.svg";
import teamLogo from "../../assets/icons/teamLogo.webp";
import playerPhoto from "../../assets/icons/playerPhoto.webp";
import Select from "react-select";

export const UIelements = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const colorStyles = {
    container: (styles: any) => ({
      ...styles,
      flex: "0 1 365px",
      border: " 0.5px solid #D1D1D1",
    }),
    control: (styles: any) => ({
      ...styles,
    }),
    multiValueLabel: (styles: any) => ({
      ...styles,
      color: "#fff",
      fontSize: "14px",
      paddingTop: "5px",
    }),
    multiValue: (styles: any) => ({
      ...styles,
      borderRadius: "4px",
      backgroundColor: "red",
      color: "#fff",
      height: "24px",
    }),
    input: (styles: any) => ({
      ...styles,
      padding: "0 12px",
      fontSize: "14px",
      color: "#303030",
    }),
    placeholder: (styles: any) => ({
      ...styles,
      fontSize: "14px",
      color: "#707070",
      paddingLeft: "12px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
    }),

    menu: (styles: any) => ({
      ...styles,
      marginTop: "2px",
    }),
  };

  return (
    <div>
      {/*<section>
        <h2>Input</h2>
        <label className={s.inp}>
          <span className={s.title}>Login</span>
          <input disabled={false} />
          <span className={s.error}>Required</span>
        </label>
      </section>*/}
      {/*<section>
        <h2>Button</h2>
        <button disabled={false} className={s.btn}>
          Sign In
        </button>
        <button disabled={false} className={s.btnAdd}>
          Add +
        </button>
        <button disabled={false} className={s.btnCancel}>
          Cancel
        </button>
      </section>*/}
      {/*<section>
        <h2>Search</h2>
        <label className={s.searchInput}>
          <input placeholder="Search..." />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1245 9.64771H10.6511L13.4778 12.4877C13.7511 12.761 13.7511 13.2077 13.4778 13.481C13.2045 13.7544 12.7578 13.7544 12.4845 13.481L9.65113 10.6477V10.121L9.47113 9.93438C8.5378 10.7344 7.26447 11.1477 5.91113 10.921C4.0578 10.6077 2.5778 9.06105 2.35113 7.19438C2.00447 4.37438 4.3778 2.00105 7.1978 2.34772C9.06447 2.57438 10.6111 4.05438 10.9245 5.90771C11.1511 7.26105 10.7378 8.53438 9.9378 9.46771L10.1245 9.64771ZM3.65114 6.64772C3.65114 8.30772 4.99114 9.64772 6.65114 9.64772C8.31114 9.64772 9.65114 8.30772 9.65114 6.64772C9.65114 4.98772 8.31114 3.64772 6.65114 3.64772C4.99114 3.64772 3.65114 4.98772 3.65114 6.64772Z"
              fill="#D1D1D1"
            />
          </svg>
        </label>
      </section>*/}
      {/*<section>
        <h2>Notification</h2>
        <div className={s.notification}>
          User with the specified username / password was not found.
        </div>
      </section>
      <section>
        <h2>Checkbox</h2>
        <div className={s.checkBlock}>
          <div className={s.flexCheck}>
            <input id="ce" type="checkbox" name="check" disabled={false} />
            <label htmlFor="ce" className={s.checkbox}>
              <svg
                width="7"
                height="6"
                viewBox="0 0 7 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.64624 5.39625C2.45124 5.59125 2.13624 5.59125 1.94124 5.39625L0.146243 3.60125C0.0526164 3.50783 0 3.38101 0 3.24875C0 3.11649 0.0526164 2.98967 0.146243 2.89625C0.341243 2.70125 0.656243 2.70125 0.851243 2.89625L2.29124 4.33625L5.73124 0.89625C5.92624 0.70125 6.24124 0.70125 6.43624 0.89625C6.63124 1.09125 6.63124 1.40625 6.43624 1.60125L2.64624 5.39625Z"
                  fill="white"
                />
              </svg>
              <span className={s.checkText}>Text</span>
            </label>
          </div>
          <span className={s.checkError}>
            You must be accept the agreement.
          </span>
        </div>
      </section>*/}
      {/*<section>
        <h2>Link</h2>*/}
      {/*//s.link + " " + s.disableLink = disabled*/}
      {/*<Link className={s.link} to="/">
          Text
        </Link>
      </section>
      <section>
        <h2>Navigation</h2>
        <header className={s.header}>
          <div className={s.contentHeader}>
            <div className={s.burger375px}>
              <span className={s.spanBurger}></span>
            </div>
            <div className={s.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={s.infoUser}>
              <span>John Smith</span>
              <img src={userIcon} alt="userIcon" />
            </div>
          </div>
        </header>
      </section>*/}
      <section>
        <h2>Multiselect</h2>
        <Select options={options} styles={colorStyles} menuIsOpen isMulti />
      </section>
      {/* //! Team card  ************************************************* */}
      <section>
        <h2>Card Team</h2>

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
      </section>
      {/* //! Player card  ************************************************* */}
      <section>
        <h2>Player Team</h2>

        <div className={s.cardTeam}>
          <div className={s.teamTitle}>
            <span>
              Players <span className={s.teamTitle__text}>/</span> Greg
              Whittington
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
      </section>
      {/*  */}
      <div className={s.re}>
        <p>llll</p>
        <strong className={s.re1}>
          999Б
          <p>div</p>
        </strong>
        <p className={s.br}>888</p>
        <h6>
          -3333
          <p>66</p>
        </h6>
        <strong>
          <p>888</p>
          <i>999</i>
          <p>888</p>
          <i>sss</i>
          <p>888</p>
          1111
          <h4>-55555</h4>
          <p>rrrr</p>
        </strong>
        <p>3333</p>
        <p>3333</p>
        <i>3333</i>
        <div>strong</div>
        <p>3333</p>
      </div>
      <a href="#">dddfffffffffffddd</a>
      <br />
      <br />
      <br />
      <br />
      <br />d
    </div>
  );
};
