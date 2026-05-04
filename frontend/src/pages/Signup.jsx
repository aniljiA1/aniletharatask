import { useState } from "react";
import API from "../api/axios";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const signup = async () => {
    if (!form.name || !form.email || !form.password) {
      return alert("All fields required");
    }
    await API.post("/auth/signup", form);
    alert("User created");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-80">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={signup}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
