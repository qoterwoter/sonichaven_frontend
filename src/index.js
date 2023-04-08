import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Authorization from "./features/auth/Authorization";
import ReleasesList from "./features/artist_card/ReleasesList";
import NewsList from "./features/news_blog/NewsList";
import Main from "./components/Main";

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path='/' element={<App/>}>
            <Route index element={<Main/>}/>
            <Route path='auth' element={<Authorization/>}/>
        </Route>
    </>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
)