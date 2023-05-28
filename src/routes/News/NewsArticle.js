import React from "react";
import {NavLink} from "react-router-dom";

const NewsArticle = (props) => {

    const newsArticle = props.newsArticle
    const article = newsArticle.article

    return (
        <article className='news__article article' key={newsArticle.id}>
            <h2 className='article__title'>
                <NavLink to={'/news/' + newsArticle.id}>{newsArticle.title}</NavLink>
            </h2>
            <p className='article__content'>
                {article.content}
                <NavLink to={'/news/' + newsArticle.id}> Читать далее</NavLink>
            </p>
            {article.image && <img className='article__image' src={article.image} alt={article.caption}/>}
            <p className='article__date'>{newsArticle.date}</p>
        </article>
    )
}

export default NewsArticle