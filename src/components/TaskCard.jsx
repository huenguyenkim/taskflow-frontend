import { Link } from "react-router-dom";

export default function TaskCard({ task, onDelete, darkMode }) {
  const getStatusStyle = () => {
    switch (task.status) {
      case "DONE":
        return "bg-green-100 text-green-700";

      case "IN_PROGRESS":
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div
      className={
        darkMode
          ? `
                        bg-gray-800
                        text-white
                        shadow-md
                        rounded-xl
                        p-5
                        mb-4
                        border
                        border-gray-700
                        hover:shadow-lg
                        transition
                      `
          : `
                        bg-white
                        text-black
                        shadow-md
                        rounded-xl
                        p-5
                        mb-4
                        border
                        hover:shadow-lg
                        transition
                      `
      }
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{task.title}</h3>

          <p className={darkMode ? "text-gray-300 mt-2" : "text-gray-600 mt-2"}>
            {task.description}
          </p>
        </div>

        <span
          className={`
                        ${getStatusStyle()}
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium
                    `}
        >
          {task.status}
        </span>
      </div>

      <div className="flex gap-3 mt-5">
        <Link to={`/tasks/edit/${task.id}`}>
          <button
            className="
                            bg-yellow-500
                            hover:bg-yellow-600
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            transition
                        "
          >
            Edit
          </button>
        </Link>

        <button
          onClick={() => onDelete(task.id)}
          className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        transition
                    "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
