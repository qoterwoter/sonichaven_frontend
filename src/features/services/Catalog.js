import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchServices} from "../reducers/serviceSlice";
import CatalogItem from "./CatalogItem";

const Catalog = () => {
    const services = useSelector(state => state.services)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])

    const servicesList = services.services.map(service => {
        return <CatalogItem service={service}/>
    })

    return (
    <>
        {servicesList}
    </>
    )
}

export default Catalog