import React, { useReducer } from 'react'
import { TodoInput } from './TodoInput'


const todoReducerFunc = ((state, { type, payload }) => {
    switch (type) {
        case "ADD": {
            state = [...state, { id: Date.now(), value: payload, isCompleted: false }]
            return state
        }
        case "TOGGLE": {
            const newState = state.map((todo) => {
                if (todo.id === payload) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo
            })
            return newState
        }
        case "DELETE": {
            let newState = state.filter((el) => el.id !== payload)
            return newState
        }
        default: {
            return state
        }
    }
})
export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducerFunc, [])
    // const handleAdd = ((value) => {
    //     setTodos([...todos, { id: Date.now(), value, isCompleted: false }])
    // })
    // const toggleStatus = ((id) => {
    //     setTodos(
    //         todos.map((todo) => {
    //             if (todo.id === id) todo.isCompleted = !todo.isCompleted;
    //             return todo
    //         })
    //     )
    // })
    // const handleDelete = ((id) => {
    //     setTodos(todos.filter((el) => el.id !== id))
    // })
    return (
        <div>
            <h1>Todo App</h1>
            <TodoInput handleAdd={(value) => dispatch({ type: "ADD", payload: value })} />

            {todos.map((todo) => (
                <div key={todo.id}>

                    <span>{`${todo.value} :-`}</span>

                    <button onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}>
                        {todo.isCompleted ? "Completed" : "Mark as completed"}                        
                    </button>

                    <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>Delete</button>
                </div>
            ))}
        </div>
    )
}
