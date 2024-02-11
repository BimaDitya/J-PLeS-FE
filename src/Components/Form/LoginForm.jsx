import viteLogo from "/vite.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-1/2 bg-white shadow px-8 py-4 border-2 border-slate-100 rounded">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="font-head text-xl text-center font-bold py-2">Masuk</p>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-16" alt="Vite logo" />
        </a>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate>
            {/* Alamat Email */}
            <div className="space-y-1.5 text-lg">
              <label className="font-head text-slate-800 font-semibold">
                Alamat Email
              </label>
              <input
                type="email"
                className="w-full px-2.5 py-1.5 font-body appearance-none border-2 border-slate-600 focus:outline-none focus:border-yellow-400 transition-colors"
                {...register("email", {
                  required: "Silahkan Masukkan Alamat Email",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email Tidak Valid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600 font-head">{errors.email.message}</p>
              )}
            </div>
            {/* Kata Sandi */}
            <div className="space-y-1.5 text-lg">
              <label className="font-head text-slate-800 font-semibold">
                Kata Sandi
              </label>
              <input
                type="password"
                className="w-full px-2.5 py-1.5 font-body appearance-none border-2 border-slate-600 focus:outline-none focus:border-yellow-400 transition-colors"
                {...register("password", {
                  required: "Silahkan Masukkan Kata Sandi",
                  minLength: 8,
                })}
              />
              {errors.password && (
                <p className="text-red-600 font-head">
                  {errors.password.message}
                  {errors.password.type === "minLength" &&
                    "Kata Sandi Min. 8 Karakter"}
                </p>
              )}
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="font-body inline-flex text-slate-600">
                Belum Memiliki Akun?&nbsp;
                <button
                  onClick={() => navigate("/auth/registration")}
                  className="font-head font-bold text-slate-800">
                  Registrasi
                </button>
              </div>
              <button
                type="submit"
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
export default LoginForm;
