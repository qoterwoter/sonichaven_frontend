import React, {useEffect, useState} from 'react';
import Faq from "./Faq";
import {highlightSearchQuery} from "../Catalog/Catalog";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

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
        const query = search.toLocaleLowerCase()

        const filtered = data.filter(question => {
            const quest = question.question.toLocaleLowerCase()
            const answer = question.answer.toLocaleLowerCase()


            if(quest.includes(query) || answer.includes(query)) {
                console.log(question.question.includes(search) || question.answer.includes(search))
                return true
            }
        })

        setQuestions(filtered.map(question => {
            return {
                ...question,
                question: highlightSearchQuery(query, question.question),
                answer: highlightSearchQuery(query, question.answer)
            }
        }))

    }, [search])

    return (
    <div className="questions">
        <h2 className="questions__title block-header">Популярные вопросы и ответы</h2>
        <div className="questions__form form form_horizontal">
            <label htmlFor="search" className="form__label">
                <SearchRoundedIcon className={'icon'}/>
            </label>
            <input
                className={'form__input form__input_search'}
                placeholder={'Напишите ваш вопрос'}
                id={'search'}
                type={'search'}
                value={search}
                onChange={onSearch}
            />
        </div>
        <ol className="questions__list">
            {questions.map((faq, id) => <Faq faq={faq} key={`faq${id}`}/>)}
        </ol>
    </div>
    );
}

export default Questions;