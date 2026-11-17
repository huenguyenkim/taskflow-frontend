import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const handleSubmit =
        async (e) => {

            e.preventDefault();

            try {

                setLoading(true);
                setError("");

                await register({
                    username,
                    email,
                    password,
                });

                alert(
                    "Register successful!"
                );

                navigate("/login");

            }catch (err) {

                console.log("REGISTER ERROR:", err);

                console.log(
                    "RESPONSE:",
                    err.response?.data
                );

                setError(
                    err.response?.data?.message ||
                    JSON.stringify(
                        err.response?.data
                    ) ||
                    err.message
                );
            } finally {

                setLoading(false);

            }
        };

    return (

        <div
            style={{
                maxWidth: "400px",
                margin: "50px auto",
            }}
        >

            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                    required
                />

                <br />
                <br />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

                <br />
                <br />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Registering..."
                        : "Register"}
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

            <p>

                Already have an account?

                <Link to="/login">
                    {" "}Login
                </Link>

            </p>

        </div>
    );
}

export default Register;