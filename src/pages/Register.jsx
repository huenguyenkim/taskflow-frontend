import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { register } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await register({
        username,
        email,
        password,
      });

      alert("Register successful!");

      navigate("/login");
    } catch (err) {
      console.log("REGISTER ERROR:", err);

      setError(
        err.response?.data?.message ||
          JSON.stringify(err.response?.data) ||
          err.message,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-100
        px-4
      "
    >
      <div
        className="
          bg-white
          shadow-lg
          rounded-xl
          p-8
          w-full
          max-w-md
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            text-center
            mb-6
          "
        >
          TaskFlow Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-500
              hover:bg-blue-600
              text-white
              py-3
              rounded-lg
              font-semibold
              disabled:opacity-50
            "
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {error && (
          <p
            className="
              text-red-500
              text-center
              mt-4
            "
          >
            {error}
          </p>
        )}

        <p
          className="
            text-center
            mt-6
            text-gray-600
          "
        >
          Already have an account?
          <Link
            to="/login"
            className="
              text-blue-500
              hover:underline
              ml-1
            "
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
