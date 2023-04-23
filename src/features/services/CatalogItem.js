import React from "react";
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import MicExternalOnRoundedIcon from '@mui/icons-material/MicExternalOnRounded';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';
import SurroundSoundRoundedIcon from '@mui/icons-material/SurroundSoundRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';

const CatalogItem = (props) => {
    const service = props.service
    let icon = null
    console.log(service.type)

    if (service.type === 'Exclusive' || service.type === 'Exclusive+') icon = <MusicNoteRoundedIcon/>
    if (service.type === 'Mixing' || service.type === 'Mixing+') icon = <GraphicEqRoundedIcon/>
    if (service.type === 'Leasing' || service.type === 'Leasing+') icon = <HeadphonesRoundedIcon/>
    if (service.type === 'Production') icon = <SurroundSoundRoundedIcon/>
    if (service.type === 'Key') icon = <KeyRoundedIcon/>
    if (service.type === 'Record') icon = <MicExternalOnRoundedIcon/>

    return (
    <div key={service.id} className='catalog__service service'>
        <h2 className='service__title'>{service.name} {icon}</h2>
        <p className="service__description">{service.description}</p>
        <p className='service__cost'>{service.cost} Руб</p>
        <button className='service__addToCart'>Добавить в корзину</button>
    </div>
    )
}

export default CatalogItem