import React from 'react';
import Header from "./components/Header/Header";
import {Outlet} from 'react-router-dom'

import './styles/index.css'
import Footer from "./components/Footer";

export default function App() {
    return (
    <>
        <Header/>
        <>
            <Outlet/>
        </>
        <Footer/>
    </>
    )
}
