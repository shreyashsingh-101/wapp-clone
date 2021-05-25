import React from 'react'
import "./chat.css"
import { Avatar } from '@material-ui/core'

const chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
            </div>
        </div>
    )
}

export default chat
