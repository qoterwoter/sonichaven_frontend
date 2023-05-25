import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchReleasesByArtist} from "../../reducers/userSlice";
import ReleaseEditable from "../../components/Releases/ReleaseEditable";
import Release from "../../components/Releases/Release";

const UserAllReleases = () => {
    const releases = useSelector(state => state.user?.releases)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchReleasesByArtist())
    }, [dispatch])

    const releasesList = releases && releases.map((release, id) => <Release release={release} key={`release${id}`}/>)

    return (
    <main className={'main'}>
        <h2 className="block-title">Мои релизы</h2>
        <section className="userReleases">
            {releasesList}
        </section>
    </main>
    )
}

export default UserAllReleases