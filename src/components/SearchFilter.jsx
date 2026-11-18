export default function SearchFilter({
                                         keyword,
                                         setKeyword,
                                         status,
                                         setStatus,
                                         setPage,
                                     }) {

    return (

        <div className="flex flex-col md:flex-row gap-3 mb-6">

            <input
                type="text"
                placeholder="Search task..."
                value={keyword}
                onChange={(e) => {

                    setKeyword(
                        e.target.value
                    );

                    setPage(0);

                }}
                className="
          flex-1
          border
          border-gray-300
          rounded-lg
          px-4
          py-3
        "
            />

            <select
                value={status}
                onChange={(e) => {

                    setStatus(
                        e.target.value
                    );

                    setPage(0);

                }}
                className="
          border
          border-gray-300
          rounded-lg
          px-4
          py-3
        "
            >

                <option value="">
                    All Status
                </option>

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

        </div>

    );
}