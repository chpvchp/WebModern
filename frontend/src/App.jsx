import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:8000/todos");
    const data = await res.json();
    setTodos(data);
    setLoading(false);
  };

  const addTodo = async () => {
    setAdding(true);
    if (!text.trim()) return;

    await fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: text }),
    });

    setText("");
    getTodos();
    setAdding(false);
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:8000/todos/${id}`, {
      method: "DELETE",
    });
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="min-h-screen m-0 p-0 flex flex-col justify-center items-center bg-gray-100">
      <div className="p-4 bg-white flex flex-col rounded-lg gap-4 shadow-lg">
        <textarea
          className="p-4 border rounded-lg"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập title todo..."
        ></textarea>
        <button
          className={`p-2 rounded-lg text-white font-sans font-bold transition duration-200
            ${adding ? "bg-gray-400 cursor-not-allowed" : "bg-blue-400 hover:bg-blue-600"}`}
          onClick={addTodo}
          disabled={adding}
        >
          {adding ? "Adding.." : "Add Todo"}
        </button>
      </div>
      <div className="mt-8 flex gap-4">
        {loading ? (
          <p className="text-center italic">Loading...</p>
        ) : (
          todos.map((todo) => (
            <div className="p-4 flex flex-col rounded-lg bg-white shadow justify-center items-center" key={todo.id}>
              <p className="p-2 text-center border rounded-lg">{todo.title}</p>
              <button
                className="mt-2 p-2 rounded-lg bg-blue-400 text-white font-bold font-sans transition duration-200 hover:bg-blue-600"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
