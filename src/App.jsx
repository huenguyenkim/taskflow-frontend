import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskList from "./pages/TaskList";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    const token =
        localStorage.getItem(
            "accessToken"
        );

    return (
        <BrowserRouter>

            <Routes>

                {/* Home */}

                <Route
                    path="/"
                    element={
                        token
                            ? <Navigate to="/tasks" />
                            : <Navigate to="/login" />
                    }
                />

                {/* Public Routes */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Protected Routes */}

                <Route
                    path="/tasks"
                    element={
                        <ProtectedRoute>
                            <TaskList />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/tasks/create"
                    element={
                        <ProtectedRoute>
                            <CreateTask />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/tasks/edit/:id"
                    element={
                        <ProtectedRoute>
                            <EditTask />
                        </ProtectedRoute>
                    }
                />

                {/* 404 */}

                <Route
                    path="*"
                    element={
                        <h1>
                            404 - Page Not Found
                        </h1>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;