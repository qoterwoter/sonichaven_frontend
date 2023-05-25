import React, {useState} from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function Faq(props) {
    const faq = props.faq

    const [isShow, setIsShow] = useState('hidden')

    const toggleAnswer = () => {
        isShow === 'hidden' ?
            setIsShow('show') :
            setIsShow('hidden')
    }

    return (
        <li className='faq'>
            <p className="faq__question" onClick={toggleAnswer}>
                <KeyboardArrowRightRoundedIcon className={'icon icon_' + isShow}/>
                {faq.question}
            </p>
            <p className={"faq__answer faq__answer_" + isShow}>{faq.answer}</p>
        </li>
    )
}

export default Faq;