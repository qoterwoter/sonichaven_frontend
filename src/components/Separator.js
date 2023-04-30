import React from "react";

const Separator = (props) => {
    const classList = props.classList

    return <span className={"span__border " + classList}> · </span>
}

export default Separator