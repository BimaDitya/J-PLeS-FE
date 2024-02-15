import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";

function UserNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="sticky flex h-12 min-w-full flex-row items-center justify-between bg-slate-800 px-24 shadow">
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="" alt="Vite logo" />
      </a>
      <button
        className="flex flex-row font-head text-lg text-white transition-colors hover:text-yellow-400"
        onClick={() => navigate("/")}
      >
        Halo, Bima Aditya
      </button>
    </nav>
  );
}

export default UserNavbar;
