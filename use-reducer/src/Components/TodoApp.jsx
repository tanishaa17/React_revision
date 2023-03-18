import React, { useState } from 'react'
import { TodoInput } from './TodoInput'

export const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const handleAdd = ((value) => {
        setTodos(...todos, { id: Date.now(), value, isCompleted: false })
    })
    const updateStatus = ((id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) todo.isCompleted = !todo.isCompleted;
                return todo
            })
        )
    })
    return (
        <div>
            <h1>TodoApp</h1>
            <TodoInput handleAdd={handleAdd} />
        </div>
    )
}
