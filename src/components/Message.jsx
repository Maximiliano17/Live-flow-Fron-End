import React from "react";
import styles from "../modules/Message.module.css";

function Message(props) {

  const name = window.localStorage.getItem("username");

  return (
    <li>
      <p>
        <span className={`${props.from === name ? styles.Me : styles.Server}`}>
          {props.from}
        </span>
        : {props.message}
      </p>
    </li>
  );
}

export default Message;
