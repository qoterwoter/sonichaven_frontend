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
import Authorization from "./routes/Authorization/Authorization";
import Main from "./routes/Main";
import ShopCart from "./routes/ShopCart/ShopCart";
import AboutUs from "./routes/AboutUs";
import Catalog from "./routes/Catalog/Catalog";
import OrdersList from "./routes/Orders/OrdersList";
import UserProfile from "./routes/UserProfile/UserProfile";
import UserAllReleases from "./routes/UserProfile/UserAllReleases";
import UserRelease from "./routes/UserProfile/UserRelease";
import Questions from "./routes/FAQ/Questions";
import Registration from "./routes/Authorization/Registration";
import News from "./routes/News/News";
import CurrentReleases from "./routes/Releases/CurrentReleases";
import NewsList from "./routes/News/NewsList";
import ReleasesList from "./components/Releases/ReleasesList";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<App/>}>
                <Route index element={<Main/>}/>
                <Route path='auth' element={<Authorization/>}/>
                <Route path='register' element={<Registration/>}/>
                <Route path='about-us' element={<AboutUs/>}/>
                <Route path='faq' element={<Questions/>}/>
                <Route path='catalog' element={<Catalog title={'Каталог'}/>}/>
                <Route path='releases' element={<ReleasesList/>}/>
                <Route path='releases/:id' element={<CurrentReleases/>}/>

                <Route path='shopCart' element={<ShopCart/>}/>
                <Route path='orders' element={<OrdersList/>}/>
                <Route path='userProfile' element={<UserProfile/>}/>
                <Route path='myReleases/' element={<UserAllReleases/>}/>
                <Route path={'myReleases/:id'} element={<UserRelease/>}/>
                <Route path={'news'} element={<NewsList/>}/>
                <Route path={'news/:id'} element={<News/>}/>
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