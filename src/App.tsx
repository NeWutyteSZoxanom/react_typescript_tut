import './App.css';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import React,{useState  , useEffect} from 'react'
import {ITodo} from './interfaces'

const App: React.FC = () => {

  const [todos,setTodos]=useState<ITodo[]>([])

const onAddToDo = (title:string) => {
      const newTodo:ITodo ={
        title:title,
        id:Date.now(),
        completed:false 
      }
      // setTodos([newTodo,...todos])
      setTodos(pre=>[newTodo, ...pre])
}

// const toggleHandler = (id:number) => {
//   setTodos(prev => prev.map(todo => {
    
//     if(todo.id === id){
//       todo.completed  = !todo.completed

//     }
    
//     return todo
//   }))
// }

useEffect(()=>{
  const saved= JSON.parse(localStorage.getItem('todos')||'[]') as ITodo[]

  setTodos(saved)
},[])
useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(todos))
},[todos])

const toggleHandler = (id: number) => {
  setTodos(prev =>
    prev.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed
      }
    }
    return todo
  }))
} 
const removeHandler = (id:number) => {
  const shoudRemove = window.confirm("vi tochno hotite")
  if (shoudRemove){
    setTodos(pre=>pre.filter(todo => todo.id!==id))
  }
 
}

  return <div>

      <Navbar/>
      <div className="container">
        <TodoForm onAdd={onAddToDo}/>
        <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
      </div>

  </div>;
};

export default App;
