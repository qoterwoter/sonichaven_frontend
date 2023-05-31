import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchReleases} from "../../reducers/releasesSlice";
import Separator from "../Separator";
import {NavLink, useLocation} from "react-router-dom";
export default function ReleasesList() {
    const releases = useSelector(state => state.releases.releases)

    const dispatch = useDispatch()
    const location = useLocation()

    const ends = location.pathname.endsWith('/releases') || location.pathname.endsWith('/releases/')

    useEffect(()=>{
        dispatch(fetchReleases())
    }, [dispatch])

    return (
        <section className='releases'>
            <div className="releases__title block-header">
                <h2 className="block-header__title">Популярные релизы</h2>
                {!ends && <NavLink to={'/releases'}>Все релизы</NavLink>}
            </div>
            {releases.length > 0 && releases.map((release, id) => {
                if(!ends && id > 2) return null
                const date = new Date(release.release_date)
                const options = { year: 'numeric', month: 'long', day: 'numeric' };

                return (
                    <article key={id} className='releases__release release'>
                        <div className="release__header">
                            <h3 className='release__title'>{release.title}</h3>
                            <NavLink className={'release__link'} to={`/releases/${release.id}`}>Открыть</NavLink>
                        </div>
                        <img className='release__image' src={release.image} alt='img'/>
                        <p className='release__date'>Выпущен <Separator/> {date.toLocaleDateString('RU-ru', options)}</p>
                    </article>
                )
            })}
        </section>
    )
}