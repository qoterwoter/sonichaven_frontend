import React, {useEffect, useRef, useState} from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function CatalogFilter(props) {
    const filter = props.filter

    const [menu, setMenu] = useState(false)

    const [prices, setPrices] = [filter.prices, filter.setPrices]
    const [types, setTypes] = [filter.types, filter.setTypes]

    const ref = useRef()

    const toggleMenu = () => {setMenu(!menu)}

    const handleClick = (event) => {
        if(ref && ref.current && !ref.current.contains(event.target)) {
            setMenu(false)
        }
    }

    const filterTypes = e => {
        const toFilter = e.target.value
        const filtered = [...types.map(type => {
            if(type.title === toFilter) {
                return {...type, isActive: !type.isActive}
            }
            return type
        })]
        setTypes(filtered)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [ref.current])

    const pricesInputs = filter.id === 'price' && (<>
        <div className="form__column">
            <label
                className={'form__label'}
                htmlFor={'min'}
            >От</label>
            <input
                type="number"
                id={'min'}
                className="form__input"
                value={+prices.minPrice}
                onChange={e => setPrices({...prices, minPrice: e.target.value})}
            />
        </div>
        <div className="form__column">
            <label
                className={'form__label'}
                htmlFor={'max'}
            >До</label>
            <input
                type="number"
                id={'max'}
                className="form__input"
                value={+prices.maxPrice}
                onChange={e => setPrices({...prices, maxPrice: e.target.value})}
            />
        </div>
    </>)

    const typesFilters = filter.id === 'type' && (<>
        {types.map((type, id) => (
            <div className="form__row">
                <input
                    className={'form__checkbox'}
                    type={'checkbox'}
                    id={`type${id}`}
                    value={type.title}
                    checked={type.isActive}
                    onChange={filterTypes}
                />
                <label
                    htmlFor={`type${id}`}
                    className={'form__label'}
                >
                    {type.title}
                </label>
            </div>
        ))}
    </>)

    return (
    <div className={'filter'} ref={ref}>
        <div className={'block-header'} onClick={toggleMenu}>
            <KeyboardArrowRightRoundedIcon className={'icon icon_' + (menu ? 'show' : 'hidden')} />
            <p className={'filter__title'}>{filter.title}</p>
        </div>
        {menu &&
        <form className={'filter__options form'}>
            {pricesInputs}
            {typesFilters}
        </form>}
    </div>
    );
}

export default CatalogFilter;