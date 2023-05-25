import React from "react";
import {NavLink} from "react-router-dom";

const NewsArticle = (props) => {

    const newsArticle = props.newsArticle
    const article = newsArticle.article

    return (
        <article className='news__article article' key={newsArticle.id}>
            <div className="article__header">
                <h2 className='article__title'>{newsArticle.title}</h2>
                <NavLink to={'/news/' + newsArticle.id}>Подробнее</NavLink>
            </div>
            <p className='article__content'>{article.content}</p>
            {article.image && <img className='article__image' src={article.image} alt={article.caption}/>}
            <p className='article__date'>{newsArticle.date}</p>
        </article>
    )
}

export default NewsArticle