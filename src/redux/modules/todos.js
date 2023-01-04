// store를 구성하기 위해 reducer를 만들어 export 하는 곳
import { v4 as uuidv4 } from "uuid";

// action : state를 변경하기 위한 방법!!
// >> setValue, setTodos

// 01. ACTION ITEMS
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const SWITCH_TODO = "SWITCH_TODO";

// 02. ACTION CREATORS
export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload: payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: "REMOVE_TODO",
    payload: payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: "SWITCH_TODO",
    payload: payload,
  };
};

// 03. INITIAL STATES
const initialState = [
  {
    id: uuidv4(),
    title: "제목1",
    contents: "내용1",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목2",
    contents: "내용2",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "제목3",
    contents: "내용3",
    isDone: false,
  },
];

// 04. REDUCERS
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);

    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return console.log(item);
          // return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

// 05. REDUCER를 EXPORT
export default todos;
