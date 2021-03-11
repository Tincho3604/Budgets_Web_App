
import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from "react-icons/bs";


export const Ingress = 'Ingress';
export const showHalf = 'Show half of the list'
export const hideHalf = 'Collapse list in half'


export const SidebarData = [
    {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
},
    {
    title: 'Statistics',
    path: '/statistics',
    icon: <BsIcons.BsGraphUp />,
    cName: 'nav-text'
    },
    {
    title: 'Register operation',
    path: '/register operation',
    icon: <BsIcons.BsPencil/>,
    cName: 'nav-text'
    },
];