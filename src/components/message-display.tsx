import { RxStomp } from "@stomp/rx-stomp";
import { useState } from "react";
import { map } from "rxjs";
import { ChatMessage } from "../interfaces/types";
import {useEffect} from "react";


export default function MessageDisplay(props : {rxStomp: RxStomp, topic : string}) {
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>(
        [{username: "admin", message: `Welcome to ${props.topic} room!`}]
    );

    useEffect(() => {
        const subscription = props.rxStomp
            .watch(props.topic)
            .pipe(map((message) => JSON.parse(message.body)))
            .subscribe((message) => setChatMessages((chatMessages) => [...chatMessages, message]))

        return () => {
            subscription.unsubscribe();
        }

    }, [])

    return (
        <>
            <h2> Chat Message </h2>
            <ul>
                {
                    chatMessages.map((chatMessage, index) =>
                        <li key={index}>
                            <strong>{chatMessage.username}</strong>: {chatMessage.message}
                        </li>
                    )
                }
            </ul>
        </>
    )
}