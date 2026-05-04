import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

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
