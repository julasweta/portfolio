import React from "react";
import "./contact.scss";
import {Link} from "react-router-dom";
function Contact() {


  return (
    <div className="contact">
      <a href="tel:+380977454521">Подзвоніть нам +380 067 745 45 21</a>
      <a href="mailto:julasweta@ukr.net">Напишіть на julasweta@ukr.net</a>
      <a href="https://t.me/julasweta">Напишіть в чат Telegram</a>


    </div>
  );
}

export default React.memo(Contact);
