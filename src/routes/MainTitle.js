import React from "react";

const MainTitle = () => {

    return (
    <div className='helloElement'>
        <div className="container">
            <h1 className='helloElement__title'>Запись и дистрибуция <br/> музыки для каждого</h1>
            <p className='helloElement__description'>Записывай свою музыку и покоряй мир вместе с нами</p>
            <a className={'helloElement__button button button_white'} href='#catalog'>
                <span className="container">Заказать услуги</span>
            </a>
        </div>
    </div>
    )
}

export default MainTitle