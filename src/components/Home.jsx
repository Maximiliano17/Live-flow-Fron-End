import { useState, useEffect } from "react";
// Modules
import { io } from "socket.io-client";
import Swal from "sweetalert2";
import "animate.css";
// Components
import Message from "./Message";
// Css
import styles from "../modules/Home.module.css";
// Sources
import { authApi } from "../api/auth.js";
import wifi from "../assets/no-wifi.png";

const socket = io.connect("https://liveflow-backend-production.up.railway.app");

// http://localhost:4000
// https://liveflow-backend-production.up.railway.app

function Home() {
  const [message, setMessage] = useState("");
  const [saveMessage, setSaveMessage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message === "" || message.trim().length <= 0) {
      return Swal.fire({
        title: "Error",
        text: "Intenta Escribir Algo!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    let user = "";

    if(window.localStorage.getItem("username") === null) {
       user = "Random_User"
    } else {
      user = window.localStorage.getItem("username");
    }

    const newMessage = {
      body: message,
      from: user,
    };

    socket.emit("message", newMessage);

    setSaveMessage([...saveMessage, newMessage]);
    setMessage("");
  };

  useEffect(() => {
    const receiveMessage = (message) => {
      setSaveMessage([...saveMessage, message]);
    };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [saveMessage]);

  return (
    <>
      <section className={styles.home}>
        <section className={styles.video_principal}>
          <section className={styles.directo}>
            <img src={wifi} alt="!Podrias ser tu¡" />
            <p>¿Podrias ser tu?</p>
          </section>
          <section className={styles.chat}>
            <ul className={styles.containerChat}>
              {saveMessage.map((message, index) => (
                <Message
                  key={index}
                  message={message.body}
                  from={message.from}
                />
              ))}
            </ul>

            <form onSubmit={handleSubmit} className={styles.enviar}>
              <input
                type="text"
                placeholder="Chat..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <abbr title="Encuesta">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bar-chart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                  </svg>
                </button>
              </abbr>
              <abbr title="Send">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2Zm-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                    />
                  </svg>
                </button>
              </abbr>
            </form>
          </section>
        </section>
        <section className={styles.video_recomendaciones}>
          <section className={styles.recomendacion}></section>
          <section className={styles.recomendacion}></section>
          <section className={styles.recomendacion}></section>
          <section className={styles.recomendacion}></section>
          <section className={styles.recomendacion}></section>
          <section className={styles.recomendacion}></section>
        </section>
      </section>
    </>
  );
}

export default Home;
