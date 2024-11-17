import React from 'react'
import TodoList from './components/TodoList'
import { useState, useRef } from "react"

const App =()=>{
  const[todos,setTodos] = useState([])
  const inputRef =  useRef(null)  
  
  const addTodo = () => {
    const data =inputRef.current?.value?.trim()

    if(!data) return;

    const todo ={
      text: data,
      id: Date.now(),
      isCompleted: false
    }
    setTodos([...todos, todo])
    inputRef.current.value = ""
  }
  const deleteTodo = (id) => {
    setTodos((prev)=>{
      return prev.filter((value) => value.id !== id)
    })
  }
  const updateTodo = (id) => {
    const newData = prompt()
    if(newData?.trim()==="") return ;
    setTodos((prev)=>{
       return prev.map((value)=>{
        if(value.id === id){
          value.text = newData
        }
        return value
       })
    })
  }
  const toggleCompleted = (id) => {
    setTodos((prev) => {
      return prev.map((value) => {
        if (value.id === id) {
          return { ...value, isCompleted: !value.isCompleted };
        }
        return value;
      });
    });
  }
  return(
    <div className='h-screen w-screen bg-slate-200 flex items-center justify-center flex-col gap-y-5'>
         <div className=' flex gap-x-2 '>
          <input type="text" className='flex px-5 rounded-full shadow-xl w-80 h-10' ref={inputRef}/>
          <button className=' text-black rounded-lg shadow-xl bg-green-500 hover:text-white hover:bg-green-700 hover:rounded-full w-32 h-10 ml-4' onClick={addTodo}>
                  ADD
          </button>
          </div>
          <div className=' h-96 w-96 bg-green-300 rounded-lg shadow-xl'>
             {
              todos.map((value, index)=>{
                return<TodoList text={value.text} key={index} id={value.id} deleteTodo ={deleteTodo} updateTodo={updateTodo}  isCompleted={value.isCompleted} toggleCompleted={toggleCompleted}/>
              })
             }
          </div>
         
    </div>
  )
}
export default App