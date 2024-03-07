import DrawerButton from "@/Components/Button/DrawerButton";
import AdminDrawer from "@/Components/Navbar/AdminDrawer";
import SubjectTable from "../../../Components/Table/SubjectTable";
import AddSubjectModal from "../../../Components/Modal/AddSubjectModal";
import Searchbar from "../../../Components/Searchbar";

const AdminSubject = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="flex h-full w-full flex-row items-center justify-center px-16 py-8">
          <div className="bg-base-300 flex h-full w-full flex-col rounded bg-white p-4 shadow">
            {/* Top */}
            <div className="mb-2 flex h-max w-full flex-row items-center justify-between border bg-gray-50 p-2">
              <DrawerButton />
              <AdminDrawer />
              <p className="text-center font-head text-xl font-semibold">
                Subject
              </p>
              <div className="invisible">
                <DrawerButton />
              </div>
            </div>
            {/* Content */}
            <div className="h-full w-full space-y-2 overflow-y-scroll border bg-gray-50 p-2">
              <div className="flex w-full justify-between">
                <Searchbar />
                <label
                  className="flex flex-row items-center rounded bg-blue-400 py-2 pl-2 pr-4 font-head text-lg font-semibold text-white transition-colors hover:cursor-pointer hover:bg-blue-600"
                  htmlFor="modal-add-subject"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                  &nbsp;Subject
                </label>
                <input
                  className="modal-state"
                  id="modal-add-subject"
                  type="checkbox"
                />
                <AddSubjectModal />
              </div>
              {/* Table */}
              <SubjectTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminSubject;
