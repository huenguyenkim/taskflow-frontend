export default function DashboardStats({

                                           totalTasks,
                                           todoTasks,
                                           inProgressTasks,
                                           doneTasks,

                                       }) {

    return (

        <div className="
            grid
            grid-cols-1
            md:grid-cols-4
            gap-4
            mb-8
        ">

            <div className="
                bg-blue-500
                text-white
                p-5
                rounded-xl
            ">

                <h3>Total Tasks</h3>

                <p className="
                    text-3xl
                    font-bold
                ">
                    {totalTasks}
                </p>

            </div>

            <div className="
                bg-yellow-500
                text-white
                p-5
                rounded-xl
            ">

                <h3>TODO</h3>

                <p className="
                    text-3xl
                    font-bold
                ">
                    {todoTasks}
                </p>

            </div>

            <div className="
                bg-orange-500
                text-white
                p-5
                rounded-xl
            ">

                <h3>IN PROGRESS</h3>

                <p className="
                    text-3xl
                    font-bold
                ">
                    {inProgressTasks}
                </p>

            </div>

            <div className="
                bg-green-500
                text-white
                p-5
                rounded-xl
            ">

                <h3>DONE</h3>

                <p className="
                    text-3xl
                    font-bold
                ">
                    {doneTasks}
                </p>

            </div>

        </div>
    );
}