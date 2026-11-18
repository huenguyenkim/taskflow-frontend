export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        disabled={page === 0}
        onClick={() => setPage(page - 1)}
        className="
          bg-gray-200
          text-black
          px-4
          py-2
          rounded
          disabled:opacity-50
        "
      >
        Previous
      </button>

      <span className="font-semibold">
        Page {page + 1} / {totalPages}
      </span>

      <button
        disabled={page >= totalPages - 1}
        onClick={() => setPage(page + 1)}
        className="
          bg-gray-200
          text-black
          px-4
          py-2
          rounded
          disabled:opacity-50
        "
      >
        Next
      </button>
    </div>
  );
}
