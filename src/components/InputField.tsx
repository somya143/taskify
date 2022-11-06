import React, { useRef } from 'react'
import "./styles.css"

type InputProps = {
  todo : string;
  setTodo : React.Dispatch<React.SetStateAction<string>>;
  handleAdd : (e:React.FormEvent<HTMLFormElement>) => void;
}
const InputField = ({handleAdd,todo,setTodo}: InputProps) => {
const inputRef = useRef<HTMLInputElement>(null);

  return (
   <form action="" className='form' onSubmit={(e) => {
    handleAdd(e);
    inputRef.current?.blur()
   }}>
    <input type="input" className='input-box' ref={inputRef} value={todo} placeholder='Enter Task' onChange={(e)=> setTodo(e.target.value)} />
    <button type='submit' className='submit-button'>ADD</button>
   </form>
  )
}

export default InputField