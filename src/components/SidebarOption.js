import React from 'react'
import { useHistory } from 'react-router'
import db from '../firebase';
import "./SidebarOption.css" 

function SidebarOption({Icon, title, id, addChanelOption}) {
    const history = useHistory();
    const selectChannel = () => {
        if (id){
            history.push(`/room/${id}`)
        }else {
            history.push('title')
        }
    };

    const addChannel = () => {
        const channelName = prompt("Enter Channel name")
        if (channelName ) {
            db.collection('rooms').add({
                name: channelName
            })

        } 
    }
    return (
        <div className = "sidebarOption" onClick = {addChanelOption ? addChannel : selectChannel}>
            {Icon && <Icon className = "sidebarOption_icon" />}
            {Icon ? ( <h3> {title} </h3>
            ) : (
            <h3 className = "sidbarOption_channel">
                <span className = "sidebarOption_hash">#</span>{title}
            </h3> 
                )}
        </div>
    ) 
}

export default SidebarOption
