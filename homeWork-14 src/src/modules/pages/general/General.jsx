import React from 'react'
import s from './general.module.scss';
import { Navigation } from '../../../common/components/navigation/Navigation';
import { Aside } from './main/aside/Aside';
import { Content } from './main/content/Content';

export const General = () => {
    return (
        <>
            <Navigation />

            <main className={s.main}>
                <Aside />
                <Content />
            </main>
        </>
    )
}
