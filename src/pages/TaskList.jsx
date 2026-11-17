import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    getTasks,
    deleteTask,
} from "../services/taskService";

export default function TaskList() {

    const [tasks, setTasks] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [keyword, setKeyword] =
        useState("");

    const [page, setPage] =
        useState(0);

    const [totalPages, setTotalPages] =
        useState(0);

    const loadTasks = async () => {

        try {

            const response =
                await getTasks(
                    page,
                    5,
                    keyword
                );

            setTasks(
                response.content || []
            );

            setTotalPages(
                response.totalPages || 0
            );

        } catch (error) {

            console.error(
                "Failed to load tasks:",
                error
            );

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {

        const timer =
            setTimeout(() => {

                loadTasks();

            }, 500);

        return () =>
            clearTimeout(timer);

    }, [keyword, page]);

    const handleDelete = async (
        id
    ) => {

        const confirmed =
            window.confirm(
                "Delete this task?"
            );

        if (!confirmed) {
            return;
        }

        try {

            await deleteTask(id);

            loadTasks();

        } catch (error) {

            console.error(error);

        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (

        <div
            style={{
                maxWidth: "800px",
                margin: "40px auto",
            }}
        >

            <h1>Tasks</h1>

            <input
                type="text"
                placeholder="Search task..."
                value={keyword}
                onChange={(e) => {

                    setKeyword(
                        e.target.value
                    );

                    setPage(0);

                }}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "20px",
                }}
            />

            <Link to="/tasks/create">
                <button>
                    Create Task
                </button>
            </Link>

            <br />
            <br />

            {tasks.length === 0 ? (

                <p>No tasks found</p>

            ) : (

                tasks.map(task => (

                    <div
                        key={task.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "12px",
                            marginBottom: "12px",
                        }}
                    >

                        <h3>
                            {task.title}
                        </h3>

                        <p>
                            {task.description}
                        </p>

                        <p>
                            <strong>Status:</strong>{" "}
                            {task.status}
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                marginTop: "10px",
                            }}
                        >

                            <Link
                                to={`/tasks/edit/${task.id}`}
                            >
                                <button>
                                    Edit
                                </button>
                            </Link>

                            <button
                                onClick={() =>
                                    handleDelete(task.id)
                                }
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    padding: "6px 12px",
                                    cursor: "pointer",
                                }}
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))

            )}

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "20px",
                }}
            >

                <button
                    disabled={page === 0}
                    onClick={() =>
                        setPage(page - 1)
                    }
                >
                    Previous
                </button>

                <span>
          Page {page + 1}
                    {" / "}
                    {totalPages}
        </span>

                <button
                    disabled={
                        page >= totalPages - 1
                    }
                    onClick={() =>
                        setPage(page + 1)
                    }
                >
                    Next
                </button>

            </div>

        </div>

    );
}