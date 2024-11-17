import React from 'react'

const TodoList=({ text , id ,  deleteTodo,updateTodo, isCompleted, toggleCompleted }) => {
  return(
    <div
    className={`flex  p-3 m-2 rounded-lg shadow-md ${isCompleted? "bg-green-100 line-through" : "bg-green-600"}`}>
    <div className='h-30 w-96  '>
    <button
          onClick={() => toggleCompleted(id)}
          className='mt-3 ml-2 justify-center bg-green-700 text-white px-2 py-1 rounded-md hover:bg-green-950 hover:rounded-full'
        >
          {isCompleted? "Undo" : "Complete"}
        </button>
        <input type="text"className='px-5 mb-2 ml-4 mt-3 h-7 w-11/12 rounded-full ' value={text} readOnly/>
        <button className='ml-4 h-6 w-40 bg-green-950 text-white rounded-lg hover:bg-white hover:text-green-950 hover:rounded-full' onClick={()=>{updateTodo(id)}}>Update</button>
        <button className='ml-4 mt-2 h-6 w-40  bg-green-950 text-white rounded-lg hover:bg-white px-2 hover:text-green-950 hover:rounded-full' onClick={()=>{deleteTodo(id)}}>Delete</button>
        
    </div>
 </div>
  )
}

export default TodoList