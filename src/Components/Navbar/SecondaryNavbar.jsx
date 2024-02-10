import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";

function SecondaryNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="absolute min-w-full bg-slate-800 px-12 py-4 flex flex-row items-center justify-between shadow">
      <button
        className="hover:text-red-500 flex flex-row text-lg font-head text-white items-center"
        onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 22 22"
          className="w-4 h-4 fill-current">
          <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" />
        </svg>
        &nbsp;Beranda
      </button>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="" alt="Vite logo" />
      </a>
    </nav>
  );
}

export default SecondaryNavbar;
