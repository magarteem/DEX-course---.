import React from 'react'
import s from './general.module.scss';
import { Navigation } from '../../common/components/navigation/Navigation';
import { Aside } from '../../modules/navigate/navBar/Aside';
import { Outlet } from 'react-router-dom';
import { Pagination } from '../../modules/navigate/pagination/Pagination';

export const General = () => {
    return (
        <>
            <Navigation />

            <main className={s.main}>
                <Aside />
                <section className={s.content}>
                    <Outlet />
                    <Pagination />
                </section>
            </main>
        </>
    )
}
