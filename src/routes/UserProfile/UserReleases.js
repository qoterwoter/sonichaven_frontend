import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchReleasesByArtist} from "../../reducers/userSlice";
import ReleaseEditable from "../../components/Releases/ReleaseEditable";

const UserReleases = () => {
    const releases = useSelector(state => state.user?.releases)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchReleasesByArtist())
    }, [dispatch])

    const releasesList = releases && releases.map((release, id) => <ReleaseEditable release={release} key={`release${id}`}/>)

    return (
    <main className={'main'}>
        <section className="userReleases">
            <h2 className="userReleases__title block-title">Мои релизы</h2>
            {releasesList}
        </section>
    </main>
    )
}

export default UserReleases