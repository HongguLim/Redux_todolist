import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ADD_TODO, addTodo } from "../redux/modules/todos";

function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const setTodos = useSelector(function (state) {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        value={contents}
        onChange={(event) => {
          setContents(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const newTodo = {
            id: uuidv4(),
            title: title,
            contents: contents,
            isDone: false,
          };

          //   setTodos(function (prev) {
          //     return [...prev, newTodo];
          //   });
          // setTodos((prev) => [...prev, newTodo]);
          // ADD_TODO가 들어오면
          dispatch(addTodo(newTodo));
        }}
      >
        추가
      </button>
    </div>
  );
}

export default Input;
