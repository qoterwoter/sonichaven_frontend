import React from "react";
import ReleasesList from "../features/releases/ReleasesList";
import NewsList from "../features/news_blog/NewsList";
import MainTitle from "./MainTitle";
import Catalog from "../features/services/Catalog";

const Main = () => {
    return (
        <>
            <MainTitle/>
            <main className="main">
                <Catalog/>
                <ReleasesList/>
                <NewsList/>
            </main>
        </>
    )
}

export default Main