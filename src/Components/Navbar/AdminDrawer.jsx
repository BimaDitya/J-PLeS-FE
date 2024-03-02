import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";

function AdminDrawer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="drawer font-head">
        <div className="drawer-content flex h-full w-full flex-col justify-center text-lg font-semibold">
          <div className="flex w-full flex-row justify-center">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="logo" alt="Vite" />
            </a>
          </div>
          {/* Menu */}
          <div className="divider my-0"></div>
          <div className="flex h-full flex-row items-start">
            <ul className="w-full">
              <li className="group w-full rounded-sm px-2.5 py-1.5 transition hover:cursor-pointer hover:bg-yellow-400">
                <button
                  className="w-full text-start group-hover:text-white"
                  onClick={() => navigate("/admin/dashboard")}
                >
                  Dashboard
                </button>
              </li>
              <li className="group w-full rounded-sm px-2.5 py-1.5 transition hover:cursor-pointer hover:bg-yellow-400">
                <button
                  className="w-full text-start group-hover:text-white"
                  onClick={() => navigate("/admin/subject")}
                >
                  Subject
                </button>
              </li>
              <li className="group w-full rounded-sm px-2.5 py-1.5 transition hover:cursor-pointer hover:bg-yellow-400">
                <button
                  className="w-full text-start group-hover:text-white"
                  onClick={() => navigate("/admin/exercise")}
                >
                  Exercise
                </button>
              </li>
            </ul>
          </div>
          {/* Logout */}
          <div className="divider my-0"></div>
          <div className="flex h-max flex-row items-end">
            <ul className="w-full">
              <li className="group w-full rounded-sm px-2.5 py-1.5 transition hover:cursor-pointer hover:bg-yellow-400">
                <button
                  className="w-full text-start group-hover:text-white"
                  onClick={() => navigate("/")}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDrawer;
