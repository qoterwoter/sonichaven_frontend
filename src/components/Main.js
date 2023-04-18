import React from "react";
import ReleasesList from "../features/artist_card/ReleasesList";
import NewsList from "../features/news_blog/NewsList";
import AboutUs from "./AboutUs";
import Catalog from "../features/services/Catalog";

const Main = () => {
    return (
        <>
            <AboutUs/>
            <main className="main">
                <Catalog/>
                <ReleasesList/>
                <NewsList/>
            </main>
        </>
    )
}

export default Main