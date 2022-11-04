import React from 'react'
import "./styles.css"

const InputField = () => {
  return (
   <form action="" className='form'>
    <input type="input" className='input-box' placeholder='Enter Task' />
    <button type='submit' className='submit-button'>ADD</button>
   </form>
  )
}

export default InputField