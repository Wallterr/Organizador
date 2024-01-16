import React from 'react'
import './index.scss'
import { useState, useRef, useEffect } from 'react'
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Header from './Header/Header';


function Todo() {

  const[todo, setTodo] = useState('')
  const[todos, setTodos] = useState([])
  const[editId, setEditId] = useState (0)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const addTodo = () =>{
      if(todo !== ''){
        setTodos([...todos,{list : todo , id : Date.now() , status : false }])
      console.log(todos)
      setTodo('')
      }
      if(editId){
        const editTodo = todos.find((todo)=>todo.id === editId)
        const uptadeTodo = todos.map((to) => to.id=== editTodo.id
        ? (to = {id : to.id , list : todo})
        : (to = {id : to.id , list : to.list}))
        setTodos(uptadeTodo)
        setEditId(0);
        setTodo('')
      }
  };

  const inputRef = useRef('null')

  useEffect(() => {
    inputRef.current.focus();
  });

  const onDelete = (id) => {
    setTodos(todos.filter((to) => to.id !== id ))
  }

  const onComplete = (id) => {
    let complete = todos.map((list)=>{
      if(list.id === id){
        return({...list , status : !list.status})
      }
      return list
     })
     setTodos(complete)
  }
  
  const onEdit = (id) => {
    const editTodo = todos.find((to) => to.id === id)
    setTodo(editTodo.list)
    setEditId(editTodo.id)

  }

  const handleDelete = (id) => {
    const confirmed = window.confirm("Tem certeza que deseja excluir esta tarefa?");
    if (confirmed) {
      setTodos(todos.filter((to) => to.id !== id));
    }
  };

  const handleEdit = (id) => {
    const confirmed = window.confirm("Tem certeza que deseja editar esta tarefa?");
    if (confirmed) {
      const editTodo = todos.find((to) => to.id === id);
      setTodo(editTodo.list);
      setEditId(editTodo.id);
    }
  };

  


  return (
    <>
    <Header />
    <div className='container'>
        <h1 id='title-todo'> Otimize seu tempo e se organize com o nosso Planejador Diário. </h1>

        <ul id='subtitle'>
          <li> Tarefas </li>
          <li> Status </li>
          <li> Opções </li>
        </ul>

    <div id='Quebra'></div>


        <div className='list'>
            <ul>
                {todos.map((to) => (
                    <li className='list-items'>
                      <div className='list-item-list' id={to.status ? 'list-item' : ''} >{to.list}</div>
                      <span>
                        <IoMdDoneAll
                        className="list-item-icons"
                        id='complete'
                        title="Finalizar"
                        onClick={() => onComplete(to.id)}
                        />
                        
                        <FiEdit
                  className="list-item-icons"
                  id='edit'
                  title='Editar'
                  onClick={() => handleEdit(to.id)}
                />

                <MdDelete
                  className="list-item-icons"
                  id='delete'
                  title='Deletar'
                  onClick={() => handleDelete(to.id)}
                />
                        
                       </span>
                    </li>
                  ))
                }
            </ul>
        </div>
    </div>
    <form className='form-group' onSubmit={handleSubmit}>
            <input type="text" value={todo} ref={inputRef} placeholder='Adicionar tarefa' className='form-control'
            onChange={(event) => setTodo(event.target.value)}/>

            <button onClick={addTodo} > {editId ? 'Editar' : '+'} </button>
        </form>
    </>
  )
}

export default Todo