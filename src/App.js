import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import {Outlet, useLocation} from 'react-router-dom'

import './styles/index.scss'
import Footer from "./components/Footer";
import NotificationsList from "./components/Notifications/NotificationsList";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    return (
    <div>
        <Header/>
        <>
            <Outlet/>
            <NotificationsList/>
        </>
        <Footer/>
        <ScrollToTop/>
    </div>
    )
}
