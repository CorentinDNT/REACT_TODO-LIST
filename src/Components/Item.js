import React from "react";

const Item = (props) => {
  return (
    <li className="border d-flex justify-content-between align-item-center p-2 m-2">
      <div className="p-3">{props.txt}</div>
      <button
        onClick={() => props.deleteFunc(props.id)}
        className="btn btn-danger p-2 h-50"
      >
        Supprimer
      </button>
    </li>
  );
};

export default Item;
