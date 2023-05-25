import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../../reducers/newsSlice";
import NewsArticle from "./NewsArticle";
import {useLocation} from "react-router-dom";

export const beautyDate = date => {
    const timestamp = new Date(date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return timestamp.toLocaleDateString('ru-RU', options)
}

const NewsList = () => {
    const news = useSelector(state => state.news.news)
    const dispatch = useDispatch()

    const urlParams = new URLSearchParams(window.location.search);

    const [page, setPage] = useState(urlParams.get('page') || 1)

    console.log(urlParams)

    const location = useLocation()

    const onChangePage = (type) => {
        if(type==='inc' && page * 5 <= news.count) {
            setPage(page+1)
        }
        if(type==='dec' && page > 1) {
            setPage(page-1)
        }
    }

    useEffect(() => {
        dispatch(fetchNews(page))
    }, [dispatch, page])

    const newsList = news.count > 0 && news.results.map((newsArticle,id) => {
        if(!location.pathname.endsWith('/news') && id > 2) {
            return null
        }
        const article = newsArticle.article

        return (
            <NewsArticle newsArticle={{...newsArticle, date: beautyDate(newsArticle.created_at), article}} key={`news${id}`}/>
        )
    })

    const menu = (
        <div className="news__menu">
            {page > 1 && (
                <button
                    onClick={() => {onChangePage('dec')}}
                    className={'menu__action button'}
                >Предыдущие</button>
            )}

            {page * 5 < news.count && (
                <button
                    onClick={() => {onChangePage('inc')}}
                    className={'menu__action button'}
                >Следующие</button>
            )}
        </div>
    )

    return (
    <section className='news'>
        <h2 className='news__title block-title'>Новости</h2>
        {menu}
        {newsList}
        {menu}
    </section>
    )
}

export default NewsList