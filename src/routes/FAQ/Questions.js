import React, {useEffect, useState} from 'react';
import Faq from "./Faq";

function Questions(props) {
    const data = [
        {
            question: "На каком оборудовании происходит запись в студии?",
            answer: "В нашей студии используются различные программы DAW, такие как Pro Tools, Ableton, Garageband, FL Studio и Logic."
        },
        {
            question: "Какие услуги предоставляет ваша студия звукозаписи для начинающих и профессиональных музыкантов?",
            answer: "Студия звукозаписи предлагает различные услуги для различных стилей и жанров музыки, таких как рок, поп, джаз, электронная музыка и других."
        },
        {
            question: "Какие преимущества предлагает ваша студия звукозаписи для клиентов?",
            answer: "Наша студия предлагает гибкие услуги, включая адаптивный план работы и возможность проводить сессии в любое время и на любой день недели, кроме 10:00 вечера."
        },
        {
            question: "Какие условия предусматривает контракт на запись в вашей студии звукозаписи?",
            answer: "В нашей студии нет предусматривающих роялти и/или авторские права на записные материалы, все остается вашей интеллектуальной собственностью."
        },
        {
            question: "Какие требования предъявляет ваша студия звукозаписи к клиентам?",
            answer: "В нашей студии предоставляются различные услуги для различных стилей и жанров музыки, таких как рок, поп, джаз, электронная музыка и других."
        },
        {
            question: "Какие требования предъявляются к клиентам перед записью в вашей студии?",
            answer: "Студия звукозаписи предлагает различные услуги для различных стилей и жанров музыки, таких как рок, поп, джаз, электронная музыка и других."
        },
        {
            question: "Какие услуги предоставляет ваша студия звукозаписи для начинающих и профессиональных музыкантов?",
            answer: "Студия звукозаписи предлагает различные услуги для различных стилей и жанров музыки, таких как рок, поп, джаз, электронная музыка и других."
        }
    ]

    const [questions, setQuestions] = useState([...data])
    const [search, setSearch] = useState('')

    const onSearch = e => setSearch(e.target.value)

    useEffect(() => {
        if (search.length < 1) {
            setQuestions([...data])
            return
        }
        setQuestions(data.filter(question => {
            const quest = question.question.toLocaleLowerCase()
            const answer = question.answer.toLocaleLowerCase()

            const request = search.toLocaleLowerCase()

            if(quest.includes(request) || answer.includes(request)) {
                console.log(question.question.includes(search) || question.answer.includes(search))
                return true
            }
        }))
    }, [search])

    return (
    <main className="main">
        <div className="questions">
            <h2 className="questions__title block-title">Популярные вопросы и ответы</h2>
            <div className="questions__form form">
                <label className={'form__label'} htmlFor={'search'}>Поиск:</label>
                <input
                    className={'form__input form__input_search'}
                    type={'search'}
                    id={'search'}
                    value={search}
                    onChange={onSearch}
                    placeholder={'Введите запрос'}
                />
            </div>
            <ol className="questions__list">
                {questions.map(faq => <Faq faq={faq}/>)}
            </ol>
        </div>
    </main>
    );
}

export default Questions;