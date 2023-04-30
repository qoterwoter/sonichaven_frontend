import React from 'react';

const AboutUs = () => {

    return (
    <>
        <div className="helloElement">
            <div className='container'>
                <h1 className='helloElement__title'>От идеи до реализации,<br/> от записи до распространения</h1>
                <p className='helloElement__description'>Запиши свой след в истории музыки вместе с нами</p>
            </div>
        </div>
        <main className="main">
            <div className='aboutUs'>
                <div className="aboutUs__article">
                    <img className='about-us__image about-us__image_left' src='https://sun9-53.userapi.com/impg/5YnUZz9nofvilwoyUVWRo9fDOhKAsDIPsI3irQ/QKhHR-XvWyk.jpg?size=2560x1000&quality=96&sign=cb62bef7a8893f0862a4bd8758e4e12a&type=album'/>
                    <p className="about-us__paragraph paragraph">
                        Эта студия звукозаписи - идеальное место для музыкантов, которые ищут качественную и
                        профессиональную запись своей музыки. Здесь можно заказать не только стандартные услуги
                        звукозаписи, но и множество других, таких как лизинг, эксклюзивное право на использование,
                        продажа готовых треков под ключ и многое другое.
                    </p>
                </div>
                <div className="aboutUs__article">
                    <p className="about-us__paragraph">
                        Кроме того, здесь можно заниматься дистрибуцией своей музыки, чтобы она была доступна широкой аудитории. Команда профессиональных
                        звукорежиссеров и музыкальных продюсеров всегда готова предоставить свои услуги и помочь
                        воплотить в жизнь самые смелые музыкальные идеи. Все процессы звукозаписи проводятся на
                        высококлассном оборудовании, что гарантирует идеальное качество звучания.
                    </p>
                    <img className='about-us__image about-us__image_right' src='https://sun9-67.userapi.com/impg/pj52lK3e-OYOl1wox7N899Nj6O_UTJfzK3blzQ/3qPLYVP7Ebs.jpg?size=2560x1000&quality=96&sign=fecd3d5b43160b30ba76250984e13577&type=album'/>
                </div>
            </div>
        </main>
    </>
    )
}

export default AboutUs