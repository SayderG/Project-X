import React from "react";
import './Chat.css'
import './Screen.css'
import chevron from '../assets/chevron_left.svg'
import img from "../assets/mock/images/imgh.png";
import att from '../assets/attachment.svg'
import send from '../assets/send.svg'
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setScreen } from '../store/appStore'

function Message({
  avatar,
  text,
  date,
  isMy,
}) {
  return(
    <div className="chat__message">
      <img src={avatar} alt="avatar" className="chat__message__avatar"/>
      <div className={`chat__text__container ${isMy ? "mine" : ""}`}>
        <div className="chat__message__text">{text}</div>
        <div className="chat__message__date">{date}</div>
      </div>
    </div>
  )
}

export default function Chat() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = React.useState("");
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      text: "Чьи строители варят плов на лестнице между 5 и 6 ?",
      date: "12:00",
      isMy: false,
      avatar: img
    },
    {
      id: 2,
      text: "А что такого? Кому это мешает?",
      date: "12:01",
      isMy: false,
      avatar: img
    },
    {
      id: 3,
      text: "Мне! Я на диете",
      date: "12:02",
      isMy: true,
      avatar: img
    },
  ]);
  return(
    <div className="screen" style={{
      backgroundColor: "white",
      height: "100vh",
      marginBlock: 0,
    }}>
      <div className="chat__header">
        <div className="chat__header__chevron" onClick={() => {
          navigate("/");
          dispatch(setScreen(0))
        }}>
          <img src={chevron} alt="chevron" />
        </div>
        <div className="chat__header__title">Чат</div>
      </div>
      <div className="chat__messages">
        <div className="chat__weekday">Сегодня</div>
        {messages.map((message) => (
          <Message
            key={message.id}
            {...message}
          />
        ))}
      </div>
      <div className="chat__input">
        <div className="chat__input__container">
          <img src={att} alt="attachment" className="att__icon" />
          <input type="text" className="chat__input__text"
          placeholder="Напишите сообщение..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!text) return;
              setMessages([...messages, {
                id: messages.length + 1,
                text,
                date: `${new Date().getHours()}:${new Date().getMinutes()}`,
                isMy: true,
              }]);
              setText("");
              // scroll after 0.5s
              setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight);
              }, 100);
            }
          }}
        />
        </div>
        <div className="chat__input__send"
          onClick={() => {
            if (!text) return;
            setMessages([...messages, {
              id: messages.length + 1,
              text,
              date: `${new Date().getHours()}:${new Date().getMinutes()}`,
              isMy: true,
            }]);
            setText("");
            setTimeout(() => {
              window.scrollTo(0, document.body.scrollHeight);
            }, 100);
          }}
        >
          <img src={send} alt="send" />
        </div>
      </div>
    </div>
  )
}