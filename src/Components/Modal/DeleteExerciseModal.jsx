function DeleteExerciseModal() {
  return (
    <>
      <div className="modal">
        <label
          className="modal-overlay"
          htmlFor="modal-delete-exercise"
        ></label>
        <div className="modal-content flex w-full flex-col rounded p-4">
          <div className="flex w-full flex-col items-start justify-center">
            <p className="pb-2 text-start font-head text-lg font-semibold">
              Delete Exercise
            </p>
            <label
              htmlFor="modal-delete-exercise"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-slate-600 hover:bg-red-200 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="inherit"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </label>
            <div className="flex w-full flex-col space-y-2">
              {/* First Line */}
              <div className="flex w-full">
                <span className="inline-flex pb-4">
                  Are You Sure You Want to Delete The
                  <p className="font-semibold text-red-600">
                    &nbsp;Syntax Exercise 1&nbsp;
                  </p>
                  Exercise?
                </span>
              </div>
            </div>
            <div className="flex w-1/4 flex-row space-x-2">
              <button
                type="submit"
                className="w-full rounded bg-red-400 px-2 py-2 font-head font-semibold text-white transition hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteExerciseModal;
