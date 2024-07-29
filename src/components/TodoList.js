import React from 'react'

const TodoList = ({tasks, setTasks}) => {
  
        const markTaskComplete = (task) => {
            setTasks(
                tasks.map((item) => {
                    if(item.id === task.id) {
                        return {...item, completed : !item.completed };
                    }
                    return item;
                })
            );
        };

        const removeTask = ({id}) => {
            setTasks(tasks.filter((task) => task.id !== id));
        };

    return (
    <div className='taskContainer'>
        {tasks.map((task) => (
            <li className='itemCombo' key={task.id}>
                <input 
                type='text' 
                value={task.title} 
                className='itemDisplay' 
                onChange={(event) => event.preventDefault()}
                />
                <br></br>
                <center>
                    <div>
                        <button 
                            className='button-mark-complete' 
                            onClick={() => markTaskComplete(task)}>
                                Complete
                        </button>
                        <button 
                            className='button-remove-item' 
                            onClick={() => removeTask(task)}>
                                Remove
                        </button>
                    </div>
                </center>
                
            </li>
        )

        )}
    </div>
  );
};

export default TodoList