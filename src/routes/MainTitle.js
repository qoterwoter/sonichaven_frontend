import React from "react";

const MainTitle = () => {

    return (
    <div className='helloElement'>
        <div className="container">
            <h1 className='helloElement__title'>Запись и дистрибуция <br/> музыки для каждого</h1>
            <p className='helloElement__description'>Записывай свою музыку и покоряй мир вместе с нами</p>
            <div className={'helloElement__button'}>
                <a className="container"  href='#catalog'>Заказать услуги</a>
            </div>
        </div>
    </div>
    )
}

export default MainTitle