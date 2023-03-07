import { useState } from "react";
import AddItem from "./AddItem";
import TodoItems from "./TodoItems";

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const handleAdd = (text) => {
        const addNewItem = {
            title: text,
            status: false,
            id: Date.now() + Math.random()
        };
        // console.log(addNewItem.id);
        const newTodo = [...todo, addNewItem];
        // console.log(newTodo);
        setTodo(newTodo);
    };
    return (
        <>
            <AddItem handleAdd={handleAdd} />
            {/* <TodoItems /> */}
            <div>
                {todo.map((el) => (
                    <TodoItems key={el.id} el={el} />
                ))}
            </div>
        </>
    );
};
export default TodoList;
