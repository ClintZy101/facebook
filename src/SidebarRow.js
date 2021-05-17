import { Avatar } from '@material-ui/core';
import React from 'react'
import "./sidebarRow.css";

function SidebarRow({src, Icon, title}) {
    return (
        <div className="sidebarRow">
            {src &&<Avatar src={src} />}
 {/* you can pass a component as a prop ; && = if statement is true >execute*/}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
