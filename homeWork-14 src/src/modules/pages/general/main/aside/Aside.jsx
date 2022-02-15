import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import s from './aside.module.scss';
import exit from '../../../../../assets/icons/signOut.png';
import { Context } from '../../../../../contextProvider/ContextProvider';

export const Aside = () => {
    const { auth, login } = useContext(Context);
    return (
        <>
            <aside className={s.aside}>
                <div className={s.navigation}>

                    <Link to="/" className={s.teamLink}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.9899 8C10.9899 9.66 9.65989 11 7.99989 11C6.33989 11 4.99989 9.66 4.99989 8C4.99989 6.34 6.33989 5 7.99989 5C9.65989 5 10.9899 6.34 10.9899 8ZM18.99 8C18.99 9.66 17.66 11 16 11C14.34 11 13 9.66 13 8C13 6.34 14.34 5 16 5C17.66 5 18.99 6.34 18.99 8ZM7.99997 13C5.66997 13 0.999969 14.17 0.999969 16.5V18C0.999969 18.55 1.44997 19 1.99997 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 7.99997 13ZM15.0301 13.05C15.3801 13.02 15.7101 13 16.0001 13C18.33 13 23 14.17 23 16.5V18C23 18.55 22.55 19 22 19H16.8201C16.93 18.69 17 18.35 17 18V16.5C17 15.03 16.2101 13.92 15.0701 13.09C15.067 13.0869 15.064 13.083 15.0607 13.0787C15.0531 13.0688 15.044 13.0569 15.0301 13.05Z" fill="#E4163A" />
                        </svg>
                        <p>Teams</p>
                    </Link>

                    <Link to="/player" className={s.playerLink}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.9999 8C15.9999 10.21 14.2099 12 11.9999 12C9.78989 12 7.99989 10.21 7.99989 8C7.99989 5.79 9.78989 4 11.9999 4C14.2099 4 15.9999 5.79 15.9999 8ZM3.99997 18C3.99997 15.34 9.32997 14 12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H4.99997C4.44997 20 3.99997 19.55 3.99997 19V18Z" fill="#9C9C9C" />
                        </svg>
                        <p>Players</p>
                    </Link>

                </div>
                <div className={s.signOut} onClick={login}>
                    <Link to="/">
                        <img src={exit} alt={exit} />
                    </Link>
                </div>
            </aside>
        </>
    )
}
