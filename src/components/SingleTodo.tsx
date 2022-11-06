import React from 'react'
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import {MdDoneAll} from "react-icons/md";
import "./styles.css";
import TodoList from './TodoList';

type TodoProps = {
    id : number;
    title : string;
    isDone : boolean;
  }
  type Props = {
    title : TodoProps;
    todos : TodoProps[];
    setTodos : React.Dispatch<React.SetStateAction<TodoProps[]>>; 
  }
const SingleTodo = ({title,todos,setTodos}: Props) => {

const handleDone = (id:number) => {
setTodos(
    todos.map((el) => 
    el.id === id ? {...title , isDone: !title.isDone} : title
    )
)
}

const handleDelete = (id:number) => {
    setTodos(
        todos.filter((el) => el.id !== id)
    )
}

  return (
    <form action="" className='todo__single'>

        {
            title.isDone ? (
                <s className="todos_single__text">{title.title}</s>
            ): (
                <span className="todos_single__text">{title.title}</span>
            )
        }
      

        <div>
            <span className="icon">
            <AiFillEdit />
            </span>
            <span className="icon"  onClick={() => handleDelete(title.id)}>
                <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(title.id)} >
                <MdDoneAll />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo