import { useEffect, useState } from "react";
import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    getTaskById,
    updateTask,
} from "../services/taskService";

export default function EditTask() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [title, setTitle] =
        useState("");

    const [description,
        setDescription] =
        useState("");

    const [status, setStatus] =
        useState("TODO");

    const [error, setError] =
        useState("");

    useEffect(() => {

        loadTask();

    }, []);

    const loadTask = async () => {

        try {

            const task =
                await getTaskById(id);

            setTitle(task.title);

            setDescription(
                task.description || ""
            );

            setStatus(
                task.status || "TODO"
            );

        } catch (err) {

            console.error(err);

            setError(
                "Failed to load task"
            );
        }
    };

    const handleSubmit = async (
        e
    ) => {

        e.preventDefault();

        try {

            await updateTask(
                id,
                {
                    title,
                    description,
                    status,
                }
            );

            navigate("/tasks");

        } catch (err) {

            console.error(err);

            setError(
                err?.response?.data?.message ||
                "Failed to update task"
            );
        }
    };

    return (

        <div
            style={{
                maxWidth: "500px",
                margin: "40px auto",
            }}
        >

            <h1>Edit Task</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) =>
                        setTitle(
                            e.target.value
                        )
                    }
                    required
                />

                <br />
                <br />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(
                            e.target.value
                        )
                    }
                />

                <br />
                <br />

                <select
                    value={status}
                    onChange={(e) =>
                        setStatus(
                            e.target.value
                        )
                    }
                >

                    <option value="TODO">
                        TODO
                    </option>

                    <option value="IN_PROGRESS">
                        IN_PROGRESS
                    </option>

                    <option value="DONE">
                        DONE
                    </option>

                </select>

                <br />
                <br />

                <button type="submit">
                    Update Task
                </button>

            </form>

            {error && (
                <p
                    style={{
                        color: "red",
                    }}
                >
                    {error}
                </p>
            )}

        </div>
    );
}