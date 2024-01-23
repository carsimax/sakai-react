/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Eventos',
            items: [{ label: 'Gestión de Eventos', icon: 'fas fa-calendar', to: '/dashboard/events' }]
        },
        {
            label: 'Usuarios',
            items: [
                { label: 'Gestión de Instructores', icon: 'fas fa-chalkboard-user', to: '/dashboard/instructors' },
                { label: 'Gestión de Participantes', icon: 'fas fa-user-graduate', to: '/dashboard/participants' }]
        },
        {
            label: 'Catálogos Base',
            items: [
                { label: 'Tipos de Eventos' , icon: 'fas fa-calendar-alt', to: '/dashboard/eventtypes' },
                { label: 'Áreas de Conocimiento' , icon: 'fas fa-book', to: '/dashboard/knowledgeareas' },
                { label: 'Categorías' , icon: 'fas fa-tags', to: '/dashboard/categories' },
                { label: 'Subcategorías' , icon: 'fas fa-tags', to: '/dashboard/subcategories' },
                { label: 'Galería Principal' , icon: 'fas fa-images', to: '/dashboard/gallery' },
            ]
        },
        {
            label: 'Encuestas',
            items: [
                { label: 'Gestión de Encuestas', icon: 'fas fa-poll', to: '/dashboard/surveys' },
                { label: 'Reporte de Encuestas', icon: 'fas fa-chart-bar', to: '/dashboard/surveyreport' },
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
