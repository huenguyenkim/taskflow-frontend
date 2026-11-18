import api from "./api";

export const getDashboard = async () => {

    const response =
        await api.get(
            "/tasks/stats"
        );

    return response.data;
};