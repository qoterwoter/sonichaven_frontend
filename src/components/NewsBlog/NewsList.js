import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../../reducers/newsSlice";
import NewsArticle from "./NewsArticle";

const NewsList = () => {
    const news = useSelector(state => state.news.news)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    const newsList = news.count > 0 && news.results.map((newsArticle,id) => {
        if(id > 2) return null
        const article = newsArticle.article
        const date = new Date(newsArticle.created_at)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        return (
        <NewsArticle newsArticle={{...newsArticle, date: date.toLocaleDateString('ru-RU', options), article}} key={`news${id}`}/>
        )
    })

    return (
    <aside className='news'>
        <h2 className='news__title block-title'>Новости</h2>
        {newsList}
    </aside>
    )
}

export default NewsList