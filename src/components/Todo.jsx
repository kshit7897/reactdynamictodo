import React, { useState } from "react";
import InputTodo from "./InputTodo";
import "./Todocss.css";

function Todo() {
  const [data, setData] = useState([]);
  const inputData = (input) => {
    setData([...data, input]);
    console.log("input", input);
  };
  return (
    <>
      <div className="Input-1">
        <InputTodo inputData={inputData} />
      </div>
      <div className="output">
        {data.map((text) => {
          return (
            <div className="putput1">
              <h2>{text}</h2>
              <button>Delete</button>
            </div>
          );
        })}
        <button>All Delete</button>
      </div>
    </>
  );
}

export default Todo;
