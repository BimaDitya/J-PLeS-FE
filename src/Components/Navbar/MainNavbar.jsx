import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";

function MainNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="sticky flex h-12 min-w-full flex-row items-center justify-between bg-slate-800 px-24 shadow">
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="" alt="Vite logo" />
      </a>
      <div className="flex flex-row space-x-6 font-head text-lg text-white">
        <button
          className="transition-colors hover:text-yellow-400"
          onClick={() => navigate("/auth/login")}
        >
          Masuk
        </button>
        <button
          className="transition-colors hover:text-yellow-400"
          onClick={() => navigate("/auth/registration")}
        >
          Registrasi
        </button>
      </div>
    </nav>
  );
}

export default MainNavbar;
