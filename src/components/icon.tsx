import React from "react";
require ('icon/label.svg')
require ('icon/charge.svg')
require('icon/statistics.svg')
type Props = {
    name: string
}
const Icon = (props: Props)=> {
    return (
        <svg className={"icon"}>
            <use xlinkHref={'#' + props.name}/>
        </svg>
    )
};

export default Icon;