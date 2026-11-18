import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getTasks, deleteTask } from "../services/taskService";

import { getDashboard } from "../services/dashboardService";

import DashboardStats from "../components/DashboardStats";
import DashboardChart from "../components/DashboardChart";
import SearchFilter from "../components/SearchFilter";
import TaskCard from "../components/TaskCard";
import Pagination from "../components/Pagination";

export default function TaskList() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "User";

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true",
  );

  const [tasks, setTasks] = useState([]);

  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const [keyword, setKeyword] = useState("");

  const [status, setStatus] = useState("");

  const [page, setPage] = useState(0);

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const loadTasks = async () => {
    try {
      const response = await getTasks(page, 5, keyword, status);

      setTasks(response.content || []);

      setTotalPages(response.totalPages || 0);
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  const loadDashboard = async () => {
    try {
      const data = await getDashboard();

      setDashboard(data);
    } catch (error) {
      console.error("Failed to load dashboard:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      setLoading(true);

      await loadTasks();

      await loadDashboard();

      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword, status, page]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this task?");

    if (!confirmed) return;

    try {
      await deleteTask(id);

      await loadTasks();

      await loadDashboard();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login");
  };

  const totalTasks = dashboard?.totalTasks || 0;

  const todoTasks = dashboard?.todoTasks || 0;

  const inProgressTasks = dashboard?.inProgressTasks || 0;

  const doneTasks = dashboard?.doneTasks || 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-gray-100 text-black"
      }
    >
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}

        <div
          className="
                        flex
                        flex-col
                        md:flex-row
                        justify-between
                        items-center
                        gap-4
                        mb-8
                    "
        >
          <div>
            <h1 className="text-4xl font-bold">Task Dashboard</h1>

            <h2 className="text-lg font-medium mt-2">
              Welcome back, {username} 👋
            </h2>
          </div>

          <div className="flex gap-3">
            <div
              className="
                                w-10
                                h-10
                                rounded-full
                                bg-blue-500
                                text-white
                                flex
                                items-center
                                justify-center
                                font-bold
                            "
            >
              {username.charAt(0).toUpperCase()}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                                bg-gray-700
                                text-white
                                px-4
                                py-2
                                rounded-lg
                            "
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            <button
              onClick={handleLogout}
              className="
                                bg-red-500
                                hover:bg-red-600
                                text-white
                                px-4
                                py-2
                                rounded-lg
                            "
            >
              Logout
            </button>
          </div>
        </div>

        {/* Statistics */}

        <DashboardStats
          totalTasks={totalTasks}
          todoTasks={todoTasks}
          inProgressTasks={inProgressTasks}
          doneTasks={doneTasks}
        />

        {/* Chart */}

        <DashboardChart
          todo={todoTasks}
          inProgress={inProgressTasks}
          done={doneTasks}
          darkMode={darkMode}
        />

        {/* Search & Filter */}

        <SearchFilter
          keyword={keyword}
          setKeyword={setKeyword}
          status={status}
          setStatus={setStatus}
          setPage={setPage}
        />

        {/* Create Task */}

        <Link to="/tasks/create">
          <button
            className="
                            bg-blue-500
                            hover:bg-blue-600
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            mb-6
                        "
          >
            Create Task
          </button>
        </Link>

        {/* Task List */}

        {tasks.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No tasks found</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              darkMode={darkMode}
              onDelete={handleDelete}
            />
          ))
        )}

        {/* Pagination */}

        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
}
