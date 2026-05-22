function TodoItem({ title }) {

    return (
        <div style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px"
        }}>
            <h3>{title}</h3>
        </div>
    );
}

export default TodoItem;