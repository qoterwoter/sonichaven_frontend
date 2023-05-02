import React from "react";

const NewsArticle = (props) => {

  const newsArticle = props.newsArticle
  const article = newsArticle.article

  console.log(newsArticle)

  return (
      <article className='news__article article' key={newsArticle.id}>
        <h2 className='article__title'>{newsArticle.title}</h2>
        <p className='article__content'>{article.content}</p>
        {article.image && <img className='article__image' src={article.image} alt={article.caption}/>}
        <p className='article__date'>{newsArticle.date}</p>
      </article>
  )
}

export default NewsArticle