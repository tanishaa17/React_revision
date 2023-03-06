import { useState } from "react";
const AddItem = ({ handleAdd }) => {
    const [text, setText] = useState("");

    // to set the value in input box
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleClick = () => {
        handleAdd(text);
        setText("");
    };
    return (
        <>
            <input
                onChange={handleChange}
                value={text}
                type="text"
                placeholder="Add new item"
            />
            <button disabled={text === ""} onClick={handleClick}>
                Add
            </button>
        </>
    );
};
export default AddItem;
