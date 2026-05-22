import TodoList from "./components/TodoList";

function App() {

  const tasks = [
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Props" },
    { id: 3, title: "Learn Components" }
  ];

  return (
    <div>
      <h1>Todo List</h1>

      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;