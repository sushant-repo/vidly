import React from 'react'

function Like(props) {
    let classes = "fa fa-heart";
    if(!props.liked) classes+= "-o";

    return (
        <div>
        <i className={classes} style={{cursor: "pointer"}} onClick={props.onClick} aria-hidden="true"></i>
       </div>
    )
}

export default Like

