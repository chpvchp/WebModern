import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodo] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [editId, setEditID] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const getTodos = async () => {
    setLoading(true);
    const res = await fetch(`${BASE_URL}/todos`);
    const data = await res.json();
    setTodo(data);
    setLoading(false);
  };

  const addTodo = async () => {
    setAdding(true);
    if (!text.trim()) {
      setAdding(false);
      return;
    }
    await fetch(`${BASE_URL}/todos`, {
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
    setDeleting(true);
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
    getTodos();
    setDeleting(false);
  };

  const startEdit = async (todo) => {
    setEditID(todo.id);
    setEditTitle(todo.title);
  };

  const saveEdit = async () => {
    await fetch(`${BASE_URL}/todos/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: editTitle }),
    });
    setEditID(null);
    setEditTitle("");
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center gap-2">
      <div className="p-4 bg-white border border-gray-300 rounded-xl shadow-lg flex flex-col gap-2">
        <textarea
          className="p-4 border border-gray-400 rounded-lg transition duration-200 hover:border-gray-600 resize-none text-center"
          placeholder="Nhập title todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className={`p-2 text-white font-sans font-bold rounded-lg ${adding ? "bg-gray-400 cursor-not-allowed" : "bg-blue-400 transition duration-200 hover:bg-blue-600"}`}
          onClick={addTodo}
          disabled={adding}
        >
          {adding ? "Adding..." : "Add Todo"}
        </button>
      </div>
      <div className="mt-4 flex gap-4">
        {/* <p className="m-2 text-center italic">Loading...</p> */}

        {loading ? (
          <p className="m-2 text-center italic">Loading...</p>
        ) : (
          todos.map((todo) => (
            <div
              className="p-4 bg-white rounded-lg flex flex-col justify-center items-center gap-2 shadow transition duration-200 hover:scale-105 hover:shadow-md"
              key={todo.id}
            >
              {editId == todo.id ? (
                <div className="flex flex-col gap-2">
                  <input
                    className="p-2 border border-gray-400 rounded-md text-center"
                    type="text"
                    placeholder="Nhập new title..."
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button className="p-2 bg-blue-400 font-sans font-bold text-white rounded-xl transition duration-200 hover:bg-blue-600" onClick={saveEdit}>
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <p className="p-2 border rounded-md text-center">
                    {todo.title}
                  </p>
                  <button
                    className={`p-2 text-white font-sans font-bold rounded-md ${deleting ? "bg-gray-400 cursor-not-allowed" : " bg-blue-400 transition duration-200 hover:bg-blue-600 "}`}
                    onClick={() => deleteTodo(todo.id)}
                  >
                    {deleting ? "Del..." : "Delete"}
                  </button>
                  <button
                    className="p-2 text-white font-sans font-bold bg-blue-400 rounded-md transition duration-200 hover:bg-blue-600"
                    onClick={() => startEdit(todo)}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
