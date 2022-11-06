import React from 'react';
import InputField from './components/InputField';
import './App.css';
import TodoList from './components/TodoList';

type TodoProps = {
  id : number;
  title : string;
  isDone : boolean;
}
const App: React.FC = () => {
const [todo , setTodo] = React.useState<string>("");
const [todos , setTodos] = React.useState<TodoProps[]>([])

const handleAdd = (event : React.FormEvent<HTMLFormElement>) => {
event.preventDefault();

setTodos([...todos , {
  id: Date.now(),
  title:todo,
  isDone: false
 }]
 
  )
  setTodo("")
}
console.log(todos)
  return (
    <div className="App">
    <span className="headers">Taskify</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

     <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
