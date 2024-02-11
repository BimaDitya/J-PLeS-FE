import viteLogo from "/vite.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-1/2 rounded bg-white px-8 py-4 shadow">
      <div className="flex w-full flex-col items-center justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-16" alt="Vite logo" />
        </a>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2.5"
            noValidate
          >
            {/* Alamat Email */}
            <div className="space-y-1.5">
              <label className="font-head font-semibold text-slate-800">
                Alamat Email
              </label>
              <input
                type="email"
                className="w-full appearance-none border-2 border-slate-200 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:outline-none"
                {...register("email", {
                  required: "Silahkan Masukkan Alamat Email",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email Tidak Valid",
                  },
                })}
              />
              {errors.email && (
                <p className="font-head text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Kata Sandi */}
            <div className="space-y-1.5">
              <label className="font-head font-semibold text-slate-800">
                Kata Sandi
              </label>
              <input
                type="password"
                className="w-full appearance-none border-2 border-slate-200 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:outline-none"
                {...register("password", {
                  required: "Silahkan Masukkan Kata Sandi",
                  minLength: 8,
                })}
              />
              {errors.password && (
                <p className="font-head text-sm text-red-600">
                  {errors.password.message}
                  {errors.password.type === "minLength" &&
                    "Kata Sandi Min. 8 Karakter"}
                </p>
              )}
            </div>
            {/* Konfirmasi Kata Sandi */}
            <div className="space-y-1.5">
              <label className="font-head font-semibold text-slate-800">
                Konfirmasi Kata Sandi
              </label>
              <input
                type="password"
                className="w-full appearance-none border-2 border-slate-200 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:outline-none"
                {...register("cpassword", {
                  required: "Silahkan Masukkan Kata Sandi",
                  minLength: 8,
                  validate: (value) => value === watch("password"),
                })}
              />
              {errors.cpassword && (
                <p className="font-head text-sm text-red-600">
                  {errors.cpassword.message}
                  {errors.cpassword.type === "minLength" &&
                    "Kata Sandi Min. 8 Karakter"}
                  {errors.cpassword.type === "validate" &&
                    "Kata Sandi Tidak Cocok"}
                </p>
              )}
            </div>
            {/* Tombol */}
            <div className="flex flex-row items-center justify-between">
              <div className="inline-flex font-body text-sm text-slate-600">
                Sudah Memiliki Akun?&nbsp;
                <button
                  onClick={() => navigate("/auth/login")}
                  className="font-head font-bold text-slate-800"
                >
                  Masuk
                </button>
              </div>
              <button
                type="submit"
                className="rounded bg-slate-600 px-6 py-2.5 font-head font-semibold text-white transition"
              >
                Registrasi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;
