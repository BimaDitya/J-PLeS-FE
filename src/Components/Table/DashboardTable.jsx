import UserDetailModal from "../Modal/UserDetailModal";

function DashboardTable() {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-slate-400">
          <thead className="border border-slate-200 bg-slate-100 font-head text-xs uppercase text-slate-600">
            <tr>
              <th scope="col" className="px-4 py-2.5 text-left">
                Email
              </th>
              <th scope="col" className="px-4 py-2.5">
                Score
              </th>
              <th scope="col" className="px-4 py-2.5">
                Status
              </th>
              <th scope="col" className="px-4 py-2.5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-8 border-b bg-white font-body text-slate-600">
              <td className="px-4 py-2 uppercase">BIMADITYA30@GMAIL.COM</td>
              <td className="px-4 py-2 text-center">100</td>
              <td className="px-4 py-2 text-center">
                <span className="badge badge-flat-success rounded font-head">
                  Online
                </span>
              </td>
              <td className="px-4 py-2 text-center">
                <label
                  className="btn rounded bg-slate-600 font-head font-semibold text-white transition hover:bg-slate-800"
                  htmlFor="modal-user-detail"
                >
                  Detail
                </label>
                <input
                  className="modal-state"
                  id="modal-user-detail"
                  type="checkbox"
                />
                <UserDetailModal />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashboardTable;
