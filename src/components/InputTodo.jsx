import React, { useState } from "react";

function InputTodo({ inputData }) {
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Enter Your Task Here"
        />
        <button
          onClick={() => {
            inputData(text);
          }}
        >
          Add Item
        </button>
      </div>
    </>
  );
}

export default InputTodo;
