import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchReleasesByArtist} from "../../reducers/userSlice";
import ReleaseEditable from "../../components/Releases/ReleaseEditable";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
function UserRelease(props) {
    const { id } = useParams()

    const release = useSelector(state=>state.user.releases).find(release=>release.id===+id)

    const dispatch = useDispatch()

    console.log(release)

    useEffect(() => {
        dispatch(fetchReleasesByArtist())
    }, [dispatch])

    return (
    <main className="main">
        <div className="userRelease">
            <div className="userRelease__title block-title">
                <NavLink className={'title__route'} to={'/releases'}>Мои релизы</NavLink>
                <KeyboardArrowRightRoundedIcon className={'icon icon_secondary'}/>
                <NavLink className={'title__route'} to={''}>{release.title}</NavLink>
            </div>
            <ReleaseEditable release={release}/>
        </div>
    </main>
    );
}

export default UserRelease;