import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ReleaseEditable from "../../components/Releases/ReleaseEditable";
import {useParams} from "react-router-dom";
import {fetchReleases} from "../../reducers/releasesSlice";

function CurrentReleases(props) {
    const release = useSelector(state => state.releases.releases)

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchReleases(id))
    }, [dispatch])

    return (
        <main className="main">
            <div className="userRelease">
                <ReleaseEditable release={release}/>
            </div>
        </main>
    );
}

export default CurrentReleases;