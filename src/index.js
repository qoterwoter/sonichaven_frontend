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
import Authorization from "./Routes/Authorization/Authorization";
import Main from "./Routes/Main";
import ShopCart from "./Routes/ShopCart/ShopCart";
import AboutUs from "./Routes/AboutUs";
import Catalog from "./Routes/Catalog/Catalog";
import OrdersList from "./Routes/Orders/OrdersList";
import UserProfile from "./Routes/UserProfile/UserProfile";

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