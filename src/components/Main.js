import React from "react";
import ReleasesList from "../features/artist_card/ReleasesList";
import NewsList from "../features/news_blog/NewsList";

const Main = () => {

    return (
        <main className='main'>
            <ReleasesList/>
            <NewsList/>
        </main>
    )
}

export default Main