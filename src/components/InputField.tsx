import React from 'react'
import "./styles.css"

type InputProps = {
  todo : string;
  setTodo : React.Dispatch<React.SetStateAction<string>>;
  handleAdd : (e:React.FormEvent<HTMLFormElement>) => void;
}
const InputField = ({handleAdd,todo,setTodo}: InputProps) => {


  return (
   <form action="" className='form' onSubmit={handleAdd}>
    <input type="input" className='input-box' value={todo} placeholder='Enter Task' onChange={(e)=> setTodo(e.target.value)} />
    <button type='submit' className='submit-button'>ADD</button>
   </form>
  )
}

export default InputField