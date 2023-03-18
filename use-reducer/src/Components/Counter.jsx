import React, { useReducer } from 'react'

const reducerFunction = ((state, { type, payload }) => {
    switch (type) {
        case "INC":
            return state + payload;
        case "DEC":
            return state - payload;
        default: {
            return state;
        }

    }
})
export const Counter = () => {
    const [count, dispatch] = useReducer(reducerFunction, 0)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({ type: "DEC", payload: 1 })}>DEC</button>
            <button onClick={() => dispatch({ type: "INC", payload: 1 })}>DEC</button>
        </div>
    )
}
