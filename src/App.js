import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import ReleasesList from "./features/artist_card/ReleasesList";
import NewsList from "./features/news_blog/NewsList";

export default function App() {
  const state = useSelector(state => state.artist)

  return (
    <div>
      <h1>SONICHAVEN</h1>
      <h2>Релизы {state.userInfo.artist_name}:</h2>
      {state.status !=='succeeded' && <p>{state.status}</p>}
      <ReleasesList/>
      <NewsList/>
    </div>
  )
}
