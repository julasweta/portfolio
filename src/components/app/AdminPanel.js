import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  // Стан компонента для збереження тексту
  const [text, setText] = useState("");

  // Ефект для завантаження тексту зі сховища
  useEffect(() => {
    const storedText = localStorage.getItem("mainText");
    if (storedText) {
      setText(storedText);
    }
  }, []);

  // Обробник події зміни тексту
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Обробник події збереження тексту
  const handleSaveClick = () => {
    localStorage.setItem("mainText", text);
    alert("Текст збережено");
  };

  return (
    <div>
      <h2>Адмінпанель</h2>
      <label htmlFor="mainText">Текст на головній сторінці:</label>
      <textarea
        id="mainText"
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <button onClick={handleSaveClick}>Зберегти</button>
    </div>
  );
};

export default AdminPanel;
