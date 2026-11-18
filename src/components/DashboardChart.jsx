import {

    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,

} from "recharts";

export default function DashboardChart({

                                           todo,
                                           inProgress,
                                           done,

                                       }) {

    const data = [

        {
            name: "TODO",
            value: todo,
        },

        {
            name: "IN_PROGRESS",
            value: inProgress,
        },

        {
            name: "DONE",
            value: done,
        },

    ];

    const COLORS = [

        "#facc15",
        "#fb923c",
        "#22c55e",

    ];

    return (

        <div className="
            bg-white
            rounded-xl
            shadow-md
            p-6
            mb-8
        ">

            <h2 className="
                text-xl
                font-bold
                mb-4
            ">
                Task Status Overview
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={100}
                        label
                    >

                        {data.map(
                            (
                                entry,
                                index
                            ) => (

                                <Cell
                                    key={index}
                                    fill={
                                        COLORS[index]
                                    }
                                />

                            )
                        )}

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>
    );
}