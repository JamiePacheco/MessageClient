import {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {RxStomp, RxStompConfig} from "@stomp/rx-stomp"
import {useEffect} from "react";
import Status from './components/status';
import {useState} from "react";
import Chatroom from './components/Chatroom';

function App() {

  const rxStompRef = useRef(new RxStomp());
  const rxStomp = rxStompRef.current;

  const [joinedChatroom, setJoinedChatroom] = useState(false);

  const rxStompConfig : RxStompConfig = {
    brokerURL: `ws://localhost:8080/test`,
    debug : (msg) => {
      console.log(new Date(), msg)
    }
  }

  useEffect(() => {
    rxStomp.configure(rxStompConfig);
    rxStomp.activate();
    return () => {
      rxStomp.deactivate();
    }
  })
  
  return (
    <div>
      <Status rxStomp = {rxStomp}/>

      {
        !joinedChatroom && (
            <button onClick={() => setJoinedChatroom(true)}> join chatroom! </button>
          )
      }

      {
        joinedChatroom &&
          <>
            <button onClick={() => setJoinedChatroom(false)}>Leave Chatroom!</button>
            <Chatroom rxStomp = {rxStomp}/>
          </>

      }


    </div>
  );
}

export default App;
