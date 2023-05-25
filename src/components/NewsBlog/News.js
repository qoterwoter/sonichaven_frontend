import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentNews} from "../../reducers/newsSlice";
import {NavLink, useParams} from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import {beautyDate} from "./NewsList";

function News(props) {
    const news = useSelector(state => state.news.news)

    const articles = news.articles

    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentNews(id))
    }, [dispatch, id])

    return (
    <main className="main">
        <div className="news">
            <div className="news__title block-title">
                <NavLink className={'title__route'} to={'/news'}>Новости</NavLink>
                <KeyboardArrowRightRoundedIcon className={'icon icon_secondary'}/>
                <NavLink className={'title__route'} to={''}>№{news.id}</NavLink>
            </div>
            <div className="news__article">
                <div className="article__header">
                    <h2 className='article__title'>{news.title}</h2>
                </div>
                {articles?.map(article => (
                <>
                    <p className='article__content'>{article.content}</p>
                    {article.image && <img className='article__image' src={article.image} alt={article.caption}/>}
                </>
                ))}
                <p className={'article__date'}>{beautyDate(news.created_at)}</p>
            </div>
        </div>
    </main>
    );
}

export default News;