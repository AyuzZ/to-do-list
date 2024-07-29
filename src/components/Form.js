import React from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({newItem, setNewItem, tasks, setTasks }) => {
    const onInputChange = (event) => {
        setNewItem(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTasks([...tasks, {id: uuidv4(), title: newItem, completed: false}]);
        setNewItem("");
    };

  return (
    <form onSubmit={onFormSubmit}>
        <input
            type='text' 
            placeholder='Add New Item To Your To-Do-List...' 
            className='inputField' 
            value={newItem} 
            required 
            onChange={onInputChange}/>
        <br></br>
        <center>
            <button
                className='button-add-item' 
                type='submit'>Add
            </button>  
        </center>
        
    </form>
  )
}

export default Form