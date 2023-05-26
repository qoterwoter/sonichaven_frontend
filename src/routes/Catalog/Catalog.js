import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchServices} from "../../reducers/serviceSlice";
import CatalogItem from "./CatalogItem";
import {NavLink, useLocation} from "react-router-dom";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CatalogFilter from "./CatalogFilter";

export const highlightSearchQuery = (query, text) => {
    // const regex = new RegExp(`(${query})`, 'gi');
    return text.split(' ')?.map((word, i) => {
        if (word.toLowerCase().includes(query.toLowerCase())) {
            return (
                <>
                    <span key={i} className="highlight">{word}</span>&nbsp;
                </>
            );
        }
        return `${word} `;
    });
}

const Catalog = (props) => {
    const data = useSelector(state => state.services.services)

    const [services, setServices] = useState()
    const [search, setSearch] = useState('')

    const [priceFilter, setPriceFilter] = useState(null)

    const [minPrice, setMinPrice] = useState(0)
    const onMinPrice = e => setMinPrice(+e.target.value)

    const onSearch = e => setSearch(e.target.value)

    const dispatch = useDispatch()

    const filters = [
        {
            title: 'Стоимость',
            id: 'price',
            minPrice,
            onMinPrice
        }
    ]

    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])

    useEffect(() => {
        setServices([...data])
    }, [data])

    useEffect(() => {
        const allPrices = data?.map(service=>+service.cost)
        if(allPrices?.length > 0) {
            setMinPrice(Math.min(...allPrices))
        }
    }, [data])

    useEffect(() => {
        if (search.length < 3) {
            setServices([...data])
            return;
        }
        const query = search.length > 0 && search.toLowerCase()

        const filtered = [...data]?.filter(service => {
            const title = service.name.toLowerCase()
            const description = service.description.toLowerCase()
            const cost = service.cost.toLowerCase()

            if(title.includes(query) || description.includes(query) || cost.includes(query)) return true
        })

        setServices(filtered.map(service => {
            return {
                ...service,
                name: highlightSearchQuery(query, service.name),
                description: highlightSearchQuery(query, service.description),
            }
        }))
    }, [search])

    const servicesList = services?.map((service, id) => (
        <CatalogItem service={service} key={`service${id}`}/>)
    )

    const content = <>
        {props.isPopular ? servicesList?.slice(0,6) : servicesList}
    </>

    return (
    <main className='main'>
        <div className='catalog' id={'catalog'}>
            <div className="catalog__title block-header">
                <h2 className={'block-header__title form'}>{props.title}</h2>
                {!props.isPopular ? (
                    <>
                        <div className="form form_horizontal">
                            <label htmlFor="search" className="form__label">
                                <SearchRoundedIcon className={'icon'}/>
                            </label>
                            <input
                                className={'form__input form__input_search'}
                                placeholder={'Например: Дистрибуция на платформы'}
                                id={'search'}
                                type={'search'}
                                value={search}
                                onChange={onSearch}
                            />
                        </div>
                    </>
                    ) :
                    <NavLink to={'/catalog'}>Все услуги</NavLink>}
            </div>
            {!props.isPopular && (
            <>
                <div className="block-header catalog__filters filters">
                    <h3 className="filters__title">Фильтры</h3>
                    {filters.map((filter, id) => <CatalogFilter filter={filter} key={`filter${id}`} setFilter={setPriceFilter}/>)}
                </div>
                {priceFilter}
            </>
            )}
            {content}
        </div>
    </main>
    )
}

export default Catalog