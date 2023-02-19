import Home from './screens/Home'
import './App.css'
import './assets/fonts/stylesheet.css'
import Service from './screens/Service'
import Services from './screens/Services'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setScreen } from './store/appStore'
import Profile from './screens/Profile'
import Chat from './screens/Chat'
import {Route, Routes, useLocation} from "react-router";
import { useNavigate } from "react-router-dom";

function App() {
  const currentScreen = useSelector(state => state.appStore.currentScreen)
  const dispatch = useDispatch()
  const location = useLocation();
  const navigate = useNavigate();
  const screens = [
    <Home/>,
    <Service/>,
    <Services/>,
    <Profile/>,
    <Chat/>
  ]
  return (
    <div className="App">
      {
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Service />} path="/service" />
          <Route element={<Services />} path="/services" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Chat />} path="/chat" />
        </Routes>
      }
      <div className={`bottomNavigation ${(location.pathname === '/chat') ? 'hide' : ''}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="35" 
          height="32" 
          fill="none" 
          onClick={() => {
            navigate("/");
            dispatch(setScreen(0));
          }} 
          alt="user" 
          className={(currentScreen === 0) ? 'selectedItem': ''}>
          <path fill={(currentScreen === 0) ? '#4285F4' : '#A0A3BD'} d="M13.75 29.625V20.25h7.5v9.375a1.88 1.88 0 0 0 1.875 1.875h5.625a1.88 1.88 0 0 0 1.875-1.875V16.5h3.188c.862 0 1.275-1.069.618-1.631L18.756.75a1.89 1.89 0 0 0-2.512 0L.569 14.87c-.638.562-.244 1.631.619 1.631h3.187v13.125A1.88 1.88 0 0 0 6.25 31.5h5.625a1.88 1.88 0 0 0 1.875-1.875Z"/>
        </svg>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="36" 
          height="36" 
          fill="none" 
          onClick={() => {
            navigate("/services");
            dispatch(setScreen(2));
          }} 
          alt="services"
          className={(currentScreen === 2) ? 'selectedItem': ''}>
          <path fill={(currentScreen === 2) ? '#4285F4' : '#A0A3BD'}  d="M9.045 5.682A3.545 3.545 0 0 0 5.5 9.227v17.728A3.545 3.545 0 0 0 9.045 30.5h9.213c-.416-1.347-.597-3.006.183-4.254.238-.417.556-.773.927-1.064h-2.345a.886.886 0 0 1 0-1.773h5.155a5.086 5.086 0 0 1-.724-2.659c0-.303.024-.599.07-.886h-4.501a.886.886 0 0 1 0-1.773h5.107c.897-1.61 2.608-2.659 4.643-2.659.886 0 1.773.177 2.659.71.319.176.615.39.886.628V9.227a3.546 3.546 0 0 0-3.545-3.545H9.045Zm4.432 7.534a1.33 1.33 0 1 1-2.659 0 1.33 1.33 0 0 1 2.66 0Zm-1.33 6.648a1.33 1.33 0 1 1 0-2.66 1.33 1.33 0 0 1 0 2.66Zm1.33 3.988a1.33 1.33 0 1 1-2.659 0 1.33 1.33 0 0 1 2.66 0Zm3.546-11.08h7.09a.886.886 0 1 1 0 1.774h-7.09a.886.886 0 1 1 0-1.773Zm11.523 4.908A3.546 3.546 0 1 0 25 23.823a3.546 3.546 0 0 0 3.546-6.143Zm-8.864 10.604c0-1.223.992-2.216 2.216-2.216h9.75c1.223 0 2.216.993 2.216 2.216v.156c.001.126.003.252-.002.378-.017.27-.056.539-.117.803a5.3 5.3 0 0 1-.816 1.831c-.971 1.383-2.815 2.594-6.156 2.594-2.856 0-4.62-.887-5.675-2.004a5.213 5.213 0 0 1-1.414-3.224l-.002-.528v-.006Z"/>
        </svg>
        
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="38" 
          height="38" 
          fill="none" 
          onClick={() => {
            navigate("/chat");
            dispatch(setScreen(4));
          }} 
          className={(currentScreen === 4) ? 'selectedItem': ''}>
          <g clip-path="url(#a)">
            <path fill={(currentScreen === 4) ? '#4285F4' : '#A0A3BD'}  fill-rule="evenodd" d="M21.62 5.33a13.04 13.04 0 0 1 0 26.08h-.768v1.518a1.549 1.549 0 0 1-1.55 1.55c-3.774-.004-7.597-1.263-10.498-3.842-2.927-2.605-4.823-6.475-4.826-11.486v-.78a13.04 13.04 0 0 1 13.04-13.04h4.602Zm-7.67 10.738a2.301 2.301 0 1 0 0 4.602 2.301 2.301 0 0 0 0-4.602Zm10.738 0a2.302 2.302 0 1 0 0 4.603 2.302 2.302 0 0 0 0-4.603Z" clip-rule="evenodd"/>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.91.727h36.817v36.818H.91z"/>
            </clipPath>
          </defs>
        </svg>

        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="45" 
        height="44" 
        fill="none" 
        onClick={() => {
          navigate("/profile");
          dispatch(setScreen(3));
        }} 
        className={(currentScreen === 3) ? 'selectedItem': ''}>
          <path fill={(currentScreen === 3) ? '#4285F4' : '#A0A3BD'}  d="M22.363 21.818c-2 0-3.712-.712-5.136-2.136-1.424-1.424-2.136-3.136-2.136-5.136s.712-3.713 2.136-5.137c1.424-1.424 3.136-2.136 5.136-2.136s3.712.712 5.137 2.136c1.424 1.424 2.136 3.137 2.136 5.137 0 2-.712 3.712-2.136 5.136-1.425 1.424-3.137 2.136-5.137 2.136ZM11.454 36.364c-1 0-1.856-.356-2.567-1.067-.713-.713-1.07-1.57-1.07-2.57v-1.454c0-1.03.266-1.978.797-2.842a5.298 5.298 0 0 1 2.113-1.976 27.032 27.032 0 0 1 5.727-2.115c1.94-.469 3.91-.703 5.91-.703s3.969.234 5.908.703c1.94.47 3.849 1.175 5.728 2.115a5.298 5.298 0 0 1 2.112 1.976c.531.864.797 1.811.797 2.842v1.454c0 1-.356 1.857-1.067 2.57-.713.711-1.57 1.067-2.57 1.067H11.454Z"/>
        </svg>
      </div>
    </div>
  )
}

export default App
