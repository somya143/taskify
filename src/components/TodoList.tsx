import React from 'react';
import SingleTodo from './SingleTodo';
import "./styles.css";

type TodoProps = {
  id : number;
  title : string;
  isDone : boolean;
}

type Props = {
todos : TodoProps[];
setTodos :React.Dispatch<React.SetStateAction<TodoProps[]>>;
}
const TodoList = ({todos , setTodos}: Props) => {


  return (
    <div className='todo'>
     {
      todos.map((el) => (
       <SingleTodo todos={todos} setTodos={setTodos} title={el} key={el.id} />
      ))
     }
    </div>
  )
}

export default TodoList