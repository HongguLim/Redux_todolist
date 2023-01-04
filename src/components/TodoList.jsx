import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  REMOVE_TODO,
  removeTodo,
  switchTodo,
} from "../redux/modules/todos";
import { SWITCH_TODO } from "../redux/modules/todos";

function TodoList({ isActive }) {
  const todoListStyleObj = {
    backgroundColor: "#fcc5de",
    padding: "10px",
    margin: "10px",
    border: "1px solid black",
  };

  const dispatch = useDispatch();

  // configure store의 rootReducer 에서 todos를 불러옴
  const todos = useSelector(function (state) {
    return state.todos;
  });

  return (
    <div>
      <h4>{isActive ? "해야할 것" : "완료된 것"}</h4>
      {todos
        .filter((t) => t.isDone !== isActive)
        .map((item) => {
          return (
            <div key={item.id} style={todoListStyleObj}>
              <h5>{item.title}</h5>
              <p>{item.contents}</p>
              <button
                onClick={() => {
                  return dispatch(switchTodo(item.id));
                }}
              >
                {isActive ? "완료" : "취소"}
              </button>
              <button
                onClick={() => {
                  // 무슨 아이템을 지울건지 정하기
                  return dispatch(removeTodo(item.id));
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
