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
import UserReleases from "./routes/UserProfile/UserReleases";
import Registration from "./routes/Authorization/Registration";

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path='/' element={<App/>}>
            <Route index element={<Main/>}/>
            <Route path='auth' element={<Authorization/>}/>
            <Route path='about-us' element={<AboutUs/>}/>
            <Route path='shopCart' element={<ShopCart/>}/>
            <Route path='catalog' element={<Catalog title={'Каталог'}/>}/>
            <Route path='orders' element={<OrdersList/>}/>
            <Route path='userProfile' element={<UserProfile/>}/>
            <Route path='releases' element={<UserReleases/>}/>
            <Route path='register' element={<Registration/>} />
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