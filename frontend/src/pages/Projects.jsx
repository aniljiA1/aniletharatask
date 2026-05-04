import { useState, useEffect } from "react";
import API from "../api/axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  const fetchProjects = () => {
    API.get("/projects").then((res) => setProjects(res.data));
  };

  const createProject = async () => {
    if (!name) return alert("Enter project name");
    await API.post("/projects", { name });
    setName("");
    fetchProjects();
  };

  useEffect(fetchProjects, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-64"
          placeholder="Project name"
        />
        <button
          onClick={createProject}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Create
        </button>
      </div>

      {/* List */}
      <div className="grid grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{p.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
