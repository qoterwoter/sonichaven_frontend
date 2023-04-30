import React from "react";
import ReleasesList from "./Releases/ReleasesList";
import NewsList from "./NewsBlog/NewsList";
import MainTitle from "./MainTitle";
import Catalog from "./Catalog/Catalog";

const Main = () => {
    return (
        <>
            <MainTitle/>
            <main className="main">
                <Catalog title={'Популярные услуги'} isPopular={true}/>
                <ReleasesList/>
                <NewsList/>
            </main>
        </>
    )
}

export default Main