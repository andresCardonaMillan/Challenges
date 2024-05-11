import React, { useState } from "react";

export function TodoAdd({ onNewTodo }) {
  const [inputValue, setInputValue] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      description: inputValue,
      done: false,
    };

    onNewTodo(newTodo);
  };

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <input
        type="text"
        placeholder="Tarea"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

