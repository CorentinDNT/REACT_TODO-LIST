import React, { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [liste, setListe] = useState([
    { txt: "Aller faire les courses", id: uuidv4() },
    { txt: "Promener le chien", id: uuidv4() },
    { txt: "Faire une Todo list !", id: uuidv4() },
  ]);

  const [stateInput, setStateInput] = useState();

  const onInputChange = (e) => {
    setStateInput(e);
  };

  const deleteElement = (id) => {
    const filteredState = liste.filter((item) => {
      return item.id != id;
    });
    setListe(filteredState);
  };

  const sendToList = (e) => {
    e.preventDefault();

    const newArr = [...liste];
    const newToDo = {};
    newToDo.txt = stateInput;
    newToDo.id = uuidv4();

    newArr.push(newToDo);
    setListe(newArr);
    setStateInput(" ");
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-10">
      <form className="mb-3" onSubmit={(e) => sendToList(e)}>
        <label htmlFor="todo" className="form-label mt-3">
          Chose à faire
        </label>
        <input
          value={stateInput ? stateInput : ""}
          type="text"
          className="form-control"
          id="todo"
          onChange={(e) => onInputChange(e.target.value)}
        />
        <button className="mt-2 btn btn-primary d-block">Envoyer</button>
      </form>

      <h2>Lise des choses à faire :</h2>

      <ul className="list-group">
        {liste.map((item) => {
          return (
            <Item
              //item.id -> liste(state).id
              key={item.id}
              txt={item.txt}
              id={item.id}
              deleteFunc={deleteElement}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Form;
