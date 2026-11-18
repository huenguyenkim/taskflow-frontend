import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getTaskById, updateTask } from "../services/taskService";

export default function EditTask() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [status, setStatus] = useState("TODO");

  const [error, setError] = useState("");

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    try {
      const task = await getTaskById(id);

      setTitle(task.title);

      setDescription(task.description || "");

      setStatus(task.status || "TODO");
    } catch (err) {
      console.error(err);

      setError("Failed to load task");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateTask(id, {
        title,
        description,
        status,
      });

      navigate("/tasks");
    } catch (err) {
      console.error(err);

      setError(err?.response?.data?.message || "Failed to update task");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto py-10 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Edit Task</h1>

          {error && (
            <div
              className="
                            bg-red-100
                            text-red-700
                            p-3
                            rounded-lg
                            mb-4
                        "
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="
                                block
                                mb-2
                                font-medium
                            "
              >
                Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-lg
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                "
              />
            </div>

            <div>
              <label
                className="
                                block
                                mb-2
                                font-medium
                            "
              >
                Description
              </label>

              <textarea
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-lg
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                "
              />
            </div>

            <div>
              <label
                className="
                                block
                                mb-2
                                font-medium
                            "
              >
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-lg
                                    px-4
                                    py-3
                                "
              >
                <option value="TODO">TODO</option>

                <option value="IN_PROGRESS">IN PROGRESS</option>

                <option value="DONE">DONE</option>
              </select>
            </div>

            <div
              className="
                            flex
                            gap-3
                            pt-4
                        "
            >
              <button
                type="submit"
                className="
                                    bg-blue-500
                                    hover:bg-blue-600
                                    text-white
                                    px-6
                                    py-3
                                    rounded-lg
                                "
              >
                Update Task
              </button>

              <button
                type="button"
                onClick={() => navigate("/tasks")}
                className="
                                    bg-gray-500
                                    hover:bg-gray-600
                                    text-white
                                    px-6
                                    py-3
                                    rounded-lg
                                "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
