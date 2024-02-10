import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const navigate = useNavigate();
  const loginHandle = () => {
    alert("Login Berhasil");
  };
  return (
    <div className="w-1/2 bg-white shadow px-8 py-4 border-2 border-slate-100 rounded">
      <div className="w-full flex flex-col items-center justify-center space-y-4">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-20" alt="Vite logo" />
        </a>
        <div className="w-full text-slate-800">
          <p className="font-head text-2xl text-center font-bold py-2">Masuk</p>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="font-head text-lg">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="w-full p-2 font-body border-2 border-slate-400 rounded"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="font-body text-lg">
                Kata Sandi
              </label>
              <input
                name="password"
                type="password"
                className="w-full p-2 font-body border-2 border-slate-400 rounded"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="font-body inline-flex text-slate-600 text-lg">
                Belum Memiliki Akun?&nbsp;
                <button
                  onClick={() => navigate("/auth/registration")}
                  className="font-head font-semibold text-slate-800">
                  Registrasi
                </button>
              </div>
              <button
                onClick={() => loginHandle()}
                className="bg-slate-600 rounded text-lg font-semibold px-6 py-2.5 font-head text-white">
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginCard;
