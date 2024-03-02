import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";

function UserNavbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar navbar-sticky bg-primary px-24 py-0 shadow">
      <div className="navbar-start">
        <div className="navbar-item">
          <img src={viteLogo} className="logo w-8" alt="Vite" />
        </div>
      </div>
      <div className="navbar-end">
        <div className="dropdown-container">
          <div className="dropdown">
            <label
              className="flex cursor-pointer px-0 font-head text-lg font-semibold text-white transition hover:text-yellow-400"
              tabIndex="0"
            >
              Hallo, Bima
            </label>
            <div className="group dropdown-menu dropdown-menu-bottom-left rounded border border-primary/25 bg-white font-head text-primary shadow-md">
              <ul className="w-full">
                <li className="group w-full rounded-sm transition hover:cursor-pointer hover:bg-yellow-400">
                  <button className="w-full px-2.5 py-1.5 text-start hover:text-white">
                    Profile
                  </button>
                </li>
                <li className="group w-full rounded-sm transition hover:cursor-pointer hover:bg-yellow-400">
                  <button
                    className="w-full px-2.5 py-1.5 text-start hover:text-white"
                    onClick={() => navigate(`/`)}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserNavbar;
