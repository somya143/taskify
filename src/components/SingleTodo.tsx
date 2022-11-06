import React from 'react'


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
  return (
    <form action="">
        <span className="todos single__text">{title.title}</span>
    </form>
  )
}

export default SingleTodo