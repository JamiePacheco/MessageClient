import {useState, useEffect} from "react";
import {RxStompState} from "@stomp/rx-stomp"
import type { RxStomp } from '@stomp/rx-stomp'


export default function Status(props : {rxStomp : RxStomp}) {
    const [connectionStatus, setConnectionStatus] = useState("");

    useEffect(() => {
        const statusSubscription = props.rxStomp.connectionState$.subscribe((state) => {
            setConnectionStatus(RxStompState[state])
        })
    })
    
    return (
        <>
            <h2> Connection Status: {connectionStatus} </h2>
        </>
    )
}