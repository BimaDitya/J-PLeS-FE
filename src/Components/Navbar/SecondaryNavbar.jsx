import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";

function SecondaryNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="sticky flex h-12 min-w-full flex-row items-center justify-between bg-slate-800 px-24 shadow">
      <button
        className="flex flex-row font-head text-lg text-white transition-colors hover:text-yellow-400"
        onClick={() => navigate("/")}
      >
        Beranda
      </button>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="" alt="Vite logo" />
      </a>
    </nav>
  );
}

export default SecondaryNavbar;
