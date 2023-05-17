import React from 'react';
import Header from "./components/Header/Header";
import {Outlet} from 'react-router-dom'

import './styles/index.scss'
import Footer from "./components/Footer";
import NotificationsList from "./components/Notifications/NotificationsList";


export default function App() {
    return (
    <div>
        <Header/>
        <>
            <Outlet/>
            <NotificationsList/>
        </>
        <Footer/>
    </div>
    )
}
