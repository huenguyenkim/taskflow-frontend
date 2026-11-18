import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { login } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await login({
        email,
        password,
      });

      localStorage.setItem("accessToken", response.accessToken);

      localStorage.setItem("refreshToken", response.refreshToken);

      localStorage.setItem("username", response.username);

      localStorage.setItem("role", response.role);

      toast.success("Login successful!");

      navigate("/tasks");
    } catch (err) {
      toast.error("Invalid email or password");
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
            mb-2
          "
        >
          TaskFlow
        </h1>

        <p
          className="
            text-center
            text-gray-500
            mb-6
          "
        >
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p
          className="
            text-center
            mt-6
            text-gray-600
          "
        >
          Don't have an account?
          <Link
            to="/register"
            className="
              ml-1
              text-blue-500
              hover:underline
            "
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
