import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";

function MainNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="absolute min-w-full bg-slate-800 px-12 py-4 flex flex-row items-center justify-between shadow">
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="" alt="Vite logo" />
      </a>
      <div className="flex flex-row space-x-6 text-lg font-head text-white">
        <button
          className="hover:text-red-500"
          onClick={() => navigate("/auth/login")}>
          Masuk
        </button>
        <button
          className="hover:text-red-500"
          onClick={() => navigate("/auth/registration")}>
          Registrasi
        </button>
      </div>
    </nav>
  );
}

export default MainNavbar;
