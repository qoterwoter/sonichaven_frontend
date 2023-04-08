import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../reducers/newsSlice";

const NewsList = () => {
    const news = useSelector(state => state.news.news)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    const newsList = news.count > 0 && news.results.map((newsArticle,id) => {
        const article = newsArticle.article
        const date = new Date(newsArticle.created_at)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        return (
        <article className='news__article article' key={newsArticle.id}>
            <h2 className='article__title'>{newsArticle.title}</h2>
            <p className='article__content'>{article.content}</p>
            <img className='article__image' src={article.image} alt={article.caption}/>
            <p className='article__date'>{date.toLocaleDateString('ru-RU',options)}</p>
        </article>
        )
    })

    return (
    <aside className='news'>
        <h2 className='news__title'>Новости</h2>
        {newsList}
    </aside>
    )
}

export default NewsList