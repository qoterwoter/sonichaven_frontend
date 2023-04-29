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
import Main from "./components/Main";
import ShopCart from "./components/ShopCart/ShopCart";
import AboutUs from "./components/AboutUs";
import Catalog from "./components/Catalog/Catalog";
import OrdersList from "./components/Orders/OrdersList";

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