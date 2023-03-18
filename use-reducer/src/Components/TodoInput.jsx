import React, { useState } from 'react'

export const TodoInput = ({ handleAdd }) => {
    const [value, setvalue] = useState("");
    const handleSubmit = ((e) => {
        e.preventDefault()
        if (value) {
            handleAdd(value);
            setvalue("")
        }
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setvalue(e.target.value)} type="text" value={value} />
                <button disabled={!value} type='submit'>Add</button>
            </form>
        </div>
    )
}
