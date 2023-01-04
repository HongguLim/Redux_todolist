import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: uuidv4(),
  //     title: "제목1",
  //     contents: "내용1",
  //     isDone: false,
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "제목2",
  //     contents: "내용2",
  //     isDone: true,
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "제목3",
  //     contents: "내용3",
  //     isDone: false,
  //   },
  // ]);

  const todos = useSelector(function (state) {
    return state.todos;
  });

  const mainStyleObj = {
    backgroundColor: "#b0d9bb",
    padding: "20px",
  };

  return (
    <div>
      <Header />
      <main style={mainStyleObj}>
        <Input />
        <TodoList isActive={true} />
        <TodoList isActive={false} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
