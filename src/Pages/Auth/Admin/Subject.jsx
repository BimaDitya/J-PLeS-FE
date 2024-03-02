import DrawerButton from "@/Components/Button/DrawerButton";
import AdminDrawer from "@/Components/Navbar/AdminDrawer";

const AdminSubject = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="flex h-full w-full flex-row items-center justify-center px-16 py-8">
          <div className="flex h-full w-full flex-col rounded bg-base-300 bg-white p-4 shadow">
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
            <div className="h-full w-full space-y-4 overflow-y-scroll border bg-gray-50"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminSubject;
