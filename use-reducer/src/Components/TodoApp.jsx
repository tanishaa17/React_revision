import React, { useState } from 'react'
import { TodoInput } from './TodoInput'

export const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const handleAdd = ((value) => {
        setTodos([...todos, { id: Date.now(), value, isCompleted: false }])
    })
    const toggleStatus = ((id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) todo.isCompleted = !todo.isCompleted;
                return todo
            })
        )
    })
    const handleDelete = ((id) => {
        setTodos(todos.filter((el) => el.id !== id))
    })
    return (
        <div>
            <h1>Todo App</h1>
            <TodoInput handleAdd={handleAdd} />

            {todos.map((todo) => (
                <div key={todo.id}>
                    <span>{`${todo.value} :-`}</span>
                    <button onClick={() => toggleStatus(todo.id)}>{todo.isCompleted ? "Completed" : "Mark as completed"}</button>

                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
