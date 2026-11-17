import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/taskService";

export default function CreateTask() {

    const navigate = useNavigate();

    const [title, setTitle] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [status, setStatus] =
        useState("TODO");

    const [error, setError] =
        useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createTask({
                title,
                description,
                status,
            });

            navigate("/tasks");

        } catch (err) {

            console.error(err);

            setError(
                err?.response?.data?.message ||
                "Failed to create task"
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
            <h1>Create Task</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
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
                        setStatus(e.target.value)
                    }
                >

                    <option value="TODO">
                        TODO
                    </option>

                    <option value="IN_PROGRESS">
                        IN PROGRESS
                    </option>

                    <option value="DONE">
                        DONE
                    </option>

                </select>

                <br />
                <br />

                <button type="submit">
                    Create Task
                </button>

            </form>

            {error && (
                <p style={{ color: "red" }}>
                    {error}
                </p>
            )}

        </div>
    );
}