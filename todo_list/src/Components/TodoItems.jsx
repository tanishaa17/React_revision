const TodoItems = ({ el }) => {
    return (
        <>
            <div>
                {el.title} - {el.status ? "Completed" : "Mark as Completed"}
            </div>
            <button>Completed</button>
            <button>Remove</button>
        </>
    );
};
export default TodoItems;
