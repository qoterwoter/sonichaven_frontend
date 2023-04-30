import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchServices} from "../../reducers/serviceSlice";
import CatalogItem from "./CatalogItem";
import NotificationsList from "../../components/Notifications/NotificationsList";

const Catalog = (props) => {
    const services = useSelector(state => state.services)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])

    const servicesList = services.services.map(service => {
        return <CatalogItem service={service}/>
    })

    const content =
        <div className='catalog'>
            <h2 className="catalog__title block-title">{props.title}</h2>
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