import {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {RxStomp, RxStompConfig} from "@stomp/rx-stomp"
import {useEffect} from "react";
import Status from './components/status';
import {useState} from "react";
import Chatroom from './components/Chatroom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./components/layouts/Layout";
import AuthLayout from "./components/layouts/AuthLayout";
import HomePage from "./pages/home-page/HomePage";
import LoginPage from "./pages/login-page/LoginPage";
import {AuthContextProvider} from "./context/AuthContext";

function App() {

  return (
      <AuthContextProvider>
          <BrowserRouter>
              <Routes>
                  <Route path = "/" element = {<HomePage/>}/>
                  <Route path = "/login" element={<LoginPage/>}/>
              </Routes>
          </BrowserRouter>
      </AuthContextProvider>
  );
}

export default App;
