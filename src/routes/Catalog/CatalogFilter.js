import React, {useEffect, useRef, useState} from 'react';

function CatalogFilter(props) {
    const filter = props.filter

    const [menu, setMenu] = useState(false)

    const ref = useRef()

    const toggleMenu = () => {setMenu(!menu)}

    useEffect(() => {
        if(filter.id === 'price' && menu) {
            props.setFilter(
            <form className={'filter__options form'} ref={ref}>
                <div className="form__column">
                    <label className={'form__label'}>От</label>
                    <input
                        type="number"
                        className="form__input"
                        value={+filter.minPrice}
                        onChange={filter.onMinPrice}
                    />
                </div>
                <div className="form__column">
                    <label className={'form__label'}>До</label>
                    <input
                        type="number"
                        className="form__input"

                    />
                </div>
            </form>)
        } else {
            props.setFilter(null)
        }
    }, [menu])

    const handleClick = (event) => {
        if(ref && ref.current && !ref.current.contains(event.target)) {
            setMenu(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [ref.current])

    return (
    <div className={'filters__filter filter'}>
        <div className={'container'}>
            <p className={'filter__title'} onClick={toggleMenu}>{filter.title}</p>
        </div>
    </div>
    );
}

export default CatalogFilter;