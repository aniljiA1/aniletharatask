import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const linkClass = (path) =>
    `px-3 py-1 rounded ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-700"
    }`;

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="font-bold text-lg tracking-wide">🚀 Task Manager</h1>

      {/* Links */}
      <div className="flex items-center gap-3">
        <Link to="/dashboard" className={linkClass("/dashboard")}>
          Dashboard
        </Link>

        <Link to="/projects" className={linkClass("/projects")}>
          Projects
        </Link>

        <Link to="/tasks" className={linkClass("/tasks")}>
          Tasks
        </Link>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="ml-4 bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
