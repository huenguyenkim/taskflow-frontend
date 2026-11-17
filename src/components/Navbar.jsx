import { Link } from "react-router-dom";

export default function Navbar() {

    const token =
        localStorage.getItem(
            "accessToken"
        );

    const logout = () => {

        localStorage.clear();

        window.location.href =
            "/login";
    };

    return (

        <nav
            style={{
                padding: "16px",
                borderBottom:
                    "1px solid #ddd",
                marginBottom: "20px",
            }}
        >

            <Link to="/tasks">
                Tasks
            </Link>

            {" | "}

            <Link to="/profile">
                Profile
            </Link>

            {" | "}

            {!token ? (
                <>
                    <Link to="/login">
                        Login
                    </Link>

                    {" | "}

                    <Link to="/register">
                        Register
                    </Link>
                </>
            ) : (
                <button
                    onClick={logout}
                >
                    Logout
                </button>
            )}

        </nav>

    );
}