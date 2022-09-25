import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../Redux/Todo/action';

function TodoForm() {

  const [text, setText] = useState('');


  const dispatch = useDispatch();

    const handleInputChange = (e) =>{
       setText(e.target.value)
    }


    const formSubmit = (e)=>{
      e.preventDefault();
      dispatch(addNewTodo(text))
      setText('');
    }

  return (
    <form action="" className='form' onSubmit={formSubmit}>
        <input type="text" placeholder='Enter Todo ...'  className='input' onChange={handleInputChange} value={text}/>
    </form>
  )
}

export default TodoForm