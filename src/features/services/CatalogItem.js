import React from "react";

const CatalogItem = (props) => {
    const service = props.service

    return (
    <div className='catalog__service service'>
        <h2 className='service__title'>{service.name}</h2>
        <p className='service__cost'>{service.cost} Руб.</p>
    </div>
    )
}

export default CatalogItem