import React from 'react';
import ReleasesList from "../../components/Releases/ReleasesList";
import {NavLink} from "react-router-dom";

function Releases(props) {
    return (
    <main className="main">
        <ReleasesList/>
    </main>
    );
}

export default Releases;