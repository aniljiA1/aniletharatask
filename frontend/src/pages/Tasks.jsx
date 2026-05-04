import { useState, useEffect } from "react";
import API from "../api/axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = () => {
    API.get("/tasks").then((res) => setTasks(res.data));
  };

  const createTask = async () => {
    if (!title) return alert("Enter task title");
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  useEffect(fetchTasks, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-64"
          placeholder="Task title"
        />
        <button
          onClick={createTask}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* List */}
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((t) => (
          <div key={t._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{t.title}</h3>
            <p className="text-sm text-gray-500">{t.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
