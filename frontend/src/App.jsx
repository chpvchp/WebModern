import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const res = await fetch("http://localhost:8000/todos");
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
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
          className="p-2 bg-blue-400 rounded-lg text-white font-sans font-bold"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <div className="mt-8 flex gap-4">
        {todos.map((todo) => (
          <div className="p-2 rounded-lg bg-white font-sans font-bold shadow" key={todo.id}>
            <p>{todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
