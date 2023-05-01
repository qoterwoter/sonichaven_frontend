import React, {useState} from "react";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const UserProfileMiniItem = (props) => {
    const title = props.title
    const classList = props.classList
    const description = props.description

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className={`${classList}__miniItem miniItem miniItem_horizontal`}>
            <h3 className="miniItem__title information__general">{title}</h3>
            <div className="miniItem__block">{description}</div>
            <EditRoundedIcon className={'miniItem__edit icon actions__edit icon_edit'}/>
        </div>
    )
}

export default UserProfileMiniItem