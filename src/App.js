import React from 'react';
import Header from "./components/Header/Header";
import {Outlet} from 'react-router-dom'

import './styles/index.css'
import Footer from "./components/Footer";
import NotificationsList from "./components/Notifications/NotificationsList";

export default function App() {
    return (
    <>
        <Header/>
        <>
            <Outlet/>
            <NotificationsList/>
        </>
        <Footer/>
    </>
    )
}
