import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchReleases} from "../reducers/artistSlice";

export default function ReleasesList() {
  const releases = useSelector(state => state.artist.releases)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchReleases())
  }, [dispatch])

  return (
    <section className='releases'>
      {releases.length > 0 && releases.map((release, id) => {
        const date = new Date(release.release_date)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        return (
          <article key={id} className='releases__release release'>
            <h3 className='release__title'>{release.title}</h3>
            <img className='release__image' src={release.image} alt='img'/>
            <p className='release__date'>Выпущен {date.toLocaleDateString('RU-ru', options)}</p>
          </article>
        )
      })}
    </section>
  )
}