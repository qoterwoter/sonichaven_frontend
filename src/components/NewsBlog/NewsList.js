import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../../reducers/newsSlice";
import NewsArticle from "./NewsArticle";
import {useLocation, useParams} from "react-router-dom";

export const beautyDate = date => {
    const timestamp = new Date(date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return timestamp.toLocaleDateString('ru-RU', options)
}

const NewsList = () => {
    const news = useSelector(state => state.news.news)
    const dispatch = useDispatch()

    const {page} = useParams()
    console.log(page)

    const location = useLocation()

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    const newsList = news.count > 0 && news.results.map((newsArticle,id) => {
        if(!location.pathname.endsWith('/news') && id > 2) {
            return null
        }
        const article = newsArticle.article

        return (
            <NewsArticle newsArticle={{...newsArticle, date: beautyDate(newsArticle.created_at), article}} key={`news${id}`}/>
        )
    })

    return (
    <section className='news'>
        <h2 className='news__title block-title'>Новости</h2>
        {newsList}
        <div className="news__menu">

        </div>
    </section>
    )
}

export default NewsList