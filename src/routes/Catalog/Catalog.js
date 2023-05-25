import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchServices} from "../../reducers/serviceSlice";
import CatalogItem from "./CatalogItem";
import {NavLink, useLocation} from "react-router-dom";

const Catalog = (props) => {
    const services = useSelector(state => state.services)

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])

    const servicesList = services.services.map((service, id) => {
        return <CatalogItem service={service} key={`service${id}`}/>
    })

    const content =
        <div className='catalog' id={'catalog'}>
            <div className="catalog__title block-header">
                <h2 className={'block-header__title'}>{props.title}</h2>
                {!location.pathname.endsWith('/catalog') && <NavLink to={'/catalog'}>Все услуги</NavLink>}
            </div>
            {props.isPopular ? servicesList.slice(0,6) : servicesList}
        </div>

    const render = props.isPopular ?
        content :
        <main className='main'>
            {content}
        </main>



    return render
}

export default Catalog