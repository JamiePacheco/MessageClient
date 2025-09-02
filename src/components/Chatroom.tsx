import { RxStomp } from "@stomp/rx-stomp";
import { useState } from "react";
import { ChatMessage } from "../interfaces/types";
import MessageDisplay from "./message-display";

const CHATROOM_NAME = `/topic/greetings`

export default function Chatroom(props : {rxStomp : RxStomp}) {

    const [message, setMessage] = useState('');
    const [username, setUserName] = useState(`User${Math.floor(Math.random() * 1000)}`);

    function sendMessage(chatMessage : ChatMessage) {
        const body = JSON.stringify({...chatMessage})
        props.rxStomp.publish({
            destination : CHATROOM_NAME,
            body
        })
        console.log(`Sent ${body}`)
        setMessage('')
    }

    return (
        <>
            <h2> Chatroom </h2>

            <label htmlFor='username'> Username: </label>
            <input
                type = 'text'
                name = 'username'
                value = {username}
                onChange = {(e) => setUserName(e.target.value)}
            />

            <label htmlFor = 'message'> Message: </label>

            <input
                type = 'text'
                value = {message}
                onChange={(e) => setMessage(e.target.value)}
                name = 'message'/>

            <button onClick={() => sendMessage({username, message})}> Send Message </button>

            <MessageDisplay rxStomp = {props.rxStomp} topic = {CHATROOM_NAME}/>
        </>
    )


}