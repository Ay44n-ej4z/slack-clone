import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Chat.css"
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';


function Chat() {
    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null); 
    const [roomMessages, setRoomMessages] = useState ([]);
    useEffect(()=>{
    if(roomId){
        db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data())
        )
    }

    db.collection('rooms').doc(roomId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot =>
        setRoomMessages(
      snapshot.docs.map(doc => doc.data ())
        ) 

    )

    }, [roomId])
    console.log(roomDetails);
    console.log( "MESSAGES >>>>", roomMessages);
    return (
        <div className = "chat">
            <div className = 'chat_header'>
                <div className = "header_left">
                <h4 className = 'Chat_ChannelName'>
                <strong>#{roomDetails?.name}</strong>
                <StarBorderIcon />
               
                </h4>
                </div>

                <div className = "header_right"></div>
                <p>
                <InfoIcon /> Details
                </p>
            </div>
            <div className = "chat_messages">
                {roomMessages.map(({message, timestamp, username, userimage}) => (
                    <Message 
                    
                    message = {message}
                    timestamp = {timestamp}
                    username = {username}
                    userimage = {userimage}
                    
                    />
                ))}
            </div>
            <div className = "chat_messages"></div>
          <ChatInput channelName = {roomDetails?.name} channelId = {roomId} />
        </div>
    )
}

export default Chat
