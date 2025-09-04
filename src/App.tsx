import {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {RxStomp, RxStompConfig} from "@stomp/rx-stomp"
import {useEffect} from "react";
import Status from './components/status';
import {useState} from "react";
import Chatroom from './components/Chatroom';
import {Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path = "/" element = {<Home/>} />
    </Routes>
  );
}

export default App;
