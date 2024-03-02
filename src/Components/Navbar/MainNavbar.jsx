import viteLogo from "/vite.svg";
import LoginModal from "../Modal/LoginModal";
import RegistrationModal from "../Modal/RegistrationModal";

function MainNavbar() {
  return (
    <div className="navbar-sticky navbar bg-primary px-24 shadow">
      <div className="navbar-start">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} alt="Vite" />
        </a>
      </div>
      <div className="navbar-end ">
        <label
          className="px-3.5 font-head text-lg font-semibold text-white transition-colors hover:cursor-pointer hover:text-yellow-400"
          htmlFor="modal-login"
        >
          Masuk
        </label>
        <input className="modal-state" id="modal-login" type="checkbox" />
        <LoginModal />
        <label
          className="px-3.5 font-head text-lg font-semibold text-white transition-colors hover:cursor-pointer hover:text-yellow-400"
          htmlFor="modal-register"
        >
          Registrasi
        </label>
        <input className="modal-state" id="modal-register" type="checkbox" />
        <RegistrationModal />
      </div>
    </div>
  );
}

export default MainNavbar;
