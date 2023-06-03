import React from 'react';
import staff__dima from '../images/staff__dima.jpg';
import staff__marina from '../images/staff__marina.jpg';

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
            <h2 className="block-header">О нас</h2>
            <div className='aboutUs'>
                <div className="aboutUs__article">
                    <img alt={'studio'} className='aboutUs__image aboutUs__image_left' src='https://sun9-53.userapi.com/impg/5YnUZz9nofvilwoyUVWRo9fDOhKAsDIPsI3irQ/QKhHR-XvWyk.jpg?size=2560x1000&quality=96&sign=cb62bef7a8893f0862a4bd8758e4e12a&type=album'/>
                    <p className="aboutUs__paragraph paragraph">
                        Эта студия звукозаписи - идеальное место для музыкантов, которые ищут качественную и
                        профессиональную запись своей музыки. Здесь можно заказать не только стандартные услуги
                        звукозаписи, но и множество других, таких как лизинг, эксклюзивное право на использование,
                        продажа готовых треков под ключ и многое другое.
                    </p>
                </div>
                <div className="aboutUs__article">
                    <p className="aboutUs__paragraph">
                        Кроме того, здесь можно заниматься дистрибуцией своей музыки, чтобы она была доступна широкой аудитории. Команда профессиональных
                        звукорежиссеров и музыкальных продюсеров всегда готова предоставить свои услуги и помочь
                        воплотить в жизнь самые смелые музыкальные идеи. Все процессы звукозаписи проводятся на
                        высококлассном оборудовании, что гарантирует идеальное качество звучания.
                    </p>
                    <img alt={'microphone'} className='aboutUs__image aboutUs__image_right' src='https://sun9-67.userapi.com/impg/pj52lK3e-OYOl1wox7N899Nj6O_UTJfzK3blzQ/3qPLYVP7Ebs.jpg?size=2560x1000&quality=96&sign=fecd3d5b43160b30ba76250984e13577&type=album'/>
                </div>
            </div>
            <h2 className="block-header">Наши услуги</h2>
            <section className="aboutUs">
                <article className="aboutUs__article">
                    <img alt={'studio'} className='aboutUs__image aboutUs__image_left aboutUs__image_bottom' src='https://sun9-5.userapi.com/impg/s9GV3OhTj3K7egyDbebjtVkXHarupq0qWQwW_w/kP72hRnvwME.jpg?size=2560x1308&quality=96&sign=bf3d310847e98137a89ee47ba4f47dc7&type=album'/>
                    <p className="aboutUs__paragraph">
                        Студия звукозаписи предоставляет широкий спектр услуг, связанных с
                        профессиональной аудиозаписью, начиная от записи и мастеринга и
                        заканчивая сведением и дистрибуцией. Студия предлагает высококачественные
                        услуги звукозаписи в цифровом и аналоговом форматах.  Студия также
                        предоставляет услуги мастеринга и сведения, используя современное
                        оборудование и программное обеспечение.
                    </p>
                </article>
            </section>
            <h2 className="block-header">Оборудование</h2>
            <section className="aboutUs">
                <div className="aboutUs__article">
                    <img alt={'studio'} className='aboutUs__image aboutUs__image_left' src='https://sun9-53.userapi.com/impg/5YnUZz9nofvilwoyUVWRo9fDOhKAsDIPsI3irQ/QKhHR-XvWyk.jpg?size=2560x1000&quality=96&sign=cb62bef7a8893f0862a4bd8758e4e12a&type=album'/>
                    <div className="aboutUs__paragraph">
                        <ul className="aboutUs__list">
                            <li className={'list__item'}>Микрофоны: AKG C414, Shure SM7B, Neumann U87, Sennheiser MD421, Electro-Voice RE20, Shure SM57, Rode NT1-A</li>
                            <li className={'list__item'}>Звуковые карты: Focusrite Scarlett 2i2, PreSonus Studio 24c, Universal Audio Apollo Twin, Audient iD4</li>
                            <li className={'list__item'}>Мониторы: Yamaha HS5, JBL LSR305, KRK Rokit 5, Adam Audio T7V</li>
                        </ul>
                    </div>
                </div>
                <div className="aboutUs__article">
                    <div className="aboutUs__paragraph">
                        <ul className="aboutUs__list">
                            <li className={'list__item'}>Микшерный пульт: Allen & Heath ZED-10FX, Behringer Xenyx X2222USB, Yamaha MG10XU</li>
                            <li className={'list__item'}>Наушники: Beyerdynamic DT 770 Pro, Sennheiser HD 280 Pro, Audio-Technica ATH-M50x</li>
                            <li className={'list__item'}>Кабели: микрофонные XLR-кабели, TRS-кабели для подключения мониторов, USB-кабели для звуковых карт</li>
                        </ul>
                    </div>
                    <img alt={'microphone'} className='aboutUs__image aboutUs__image_right' src='https://sun9-67.userapi.com/impg/pj52lK3e-OYOl1wox7N899Nj6O_UTJfzK3blzQ/3qPLYVP7Ebs.jpg?size=2560x1000&quality=96&sign=fecd3d5b43160b30ba76250984e13577&type=album'/>
                </div>
            </section>
            <h2 className="block-header">Наш персонал</h2>
            <section className="aboutUs">
                <div className="aboutUs__article">
                    <img alt={'staff'} className='aboutUs__image aboutUs__staff aboutUs__image_left' src={staff__marina}/>
                    <div className="aboutUs__paragraph">
                        <div className="paragraph__header">
                            <h2 className="paragraph__title">Марина Дмитриевна</h2>
                            <p className="paragraph__description paragraph__description_secondary">Звукорежиссер, работает в Ableton</p>
                        </div>
                        <p className="paragraph__description">
                            <span className={'description__title'}>Работала с такими исполнителями как:</span><br/>
                            Metallica, AC/DC, Guns N' Roses, Led Zeppelin, The Rolling Stones, Pink Floyd,
                            U2, The Beatles, Black Sabbath, Deep Purple, Aerosmith, Iron Maiden, Bon Jovi,
                            The Who, Kiss, Red Hot Chili Peppers, Green Day, Linkin Park.
                        </p>
                    </div>
                </div>
                <div className="aboutUs__article">
                    <div className="aboutUs__paragraph">
                        <div className="paragraph__header">
                            <h2 className="paragraph__title">Дмитрий Поморцев</h2>
                            <p className="paragraph__description paragraph__description_secondary">Звукорежиссер, работает в Logic X</p>
                        </div>
                        <p className="paragraph__description">
                            <span className={'description__title'}>Работал с такими исполнителями как:</span><br/>
                            PHARAOH, VELIAL SQUAD, Boulevard Depo, Mnogoznaal, Big Baby Tape,
                            JEEMBO, вышел покурить, NOA, The Chemodan Clan (Грязный Луи & Brick Bazuka),
                            Vibe (Триагрутрика), 39, Basic Boy, i61, blago white, GLEBASTA SPAL, Tveth,
                            FLESH, LIZER, Lil Toenail, Cold Hart / Mackned (GothBoiClique), CAMERONAZI,
                            $UBJECTZ, BAKER и другие.
                        </p>
                    </div>
                    <img alt={'staff'} className='aboutUs__image aboutUs__staff aboutUs__image_right' src={staff__dima}/>
                </div>
            </section>
        </main>
    </>
    )
}

export default AboutUs