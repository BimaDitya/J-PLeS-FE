import viteLogo from "/vite.svg";
import { useForm } from "react-hook-form";

function LoginModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-login"></label>
        <div className="modal-content flex w-full flex-col rounded p-6">
          <div className="flex w-full flex-col items-center justify-center">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="logo w-16" alt="Vite logo" />
            </a>
            <div className="w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                {/* Alamat Email */}
                <div className="space-y-1.5">
                  <label className="font-head font-semibold text-slate-800">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    className="w-full appearance-none border-2 border-slate-200 bg-gray-50 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:bg-white focus:outline-none"
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
                    className="w-full appearance-none border-2 border-slate-200 bg-gray-50 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:bg-white focus:outline-none"
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
                {/* Tombol */}
                <div className="flex flex-row items-center justify-between pt-2">
                  <button
                    type="submit"
                    className="w-full rounded bg-slate-600 px-6 py-2.5 font-head font-semibold text-white transition hover:bg-slate-800"
                  >
                    Masuk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
