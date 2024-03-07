import DeleteSubjectModal from "../Modal/DeleteSubjectModal";
import EditSubjectModal from "../Modal/EditSubjectModal";

function SubjectTable() {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-slate-400">
          <thead className="border border-slate-200 bg-slate-100 font-head text-xs uppercase text-slate-600">
            <tr>
              <th scope="col" className="px-4 py-2.5">
                #
              </th>
              <th scope="col" className="px-4 py-2.5 text-left">
                Subject Name
              </th>
              <th scope="col" className="px-4 py-2.5">
                Subject Part
              </th>
              <th scope="col" className="px-4 py-2.5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-8 border-b bg-white font-body text-slate-600">
              <td role="row" className="px-4 py-2 text-center font-semibold">
                1
              </td>
              <td className="px-4 py-2">Java Syntax</td>
              <td className="px-4 py-2 text-center">2 Content</td>
              <td className="px-4 py-2 text-center">
                <label
                  className="btn btn-circle mx-2 rounded bg-green-400 font-head font-semibold text-white transition hover:bg-green-600"
                  htmlFor="modal-edit-subject"
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
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </label>
                <input
                  className="modal-state"
                  id="modal-edit-subject"
                  type="checkbox"
                />
                <EditSubjectModal />
                <label
                  className="btn btn-circle mx-2 rounded bg-red-400 font-head font-semibold text-white transition hover:bg-red-600"
                  htmlFor="modal-delete-subject"
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </label>
                <input
                  className="modal-state"
                  id="modal-delete-subject"
                  type="checkbox"
                />
                <DeleteSubjectModal />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SubjectTable;
