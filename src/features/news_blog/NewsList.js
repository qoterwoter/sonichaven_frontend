import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../reducers/newsSlice";

const NewsList = () => {
  const news = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <section className='news-list'>

    </section>
  )
}

export default NewsList