function UserDetailModal() {
  return (
    <>
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-user-detail"></label>
        <div className="modal-content flex w-full flex-col rounded p-4">
          <div className="flex w-full flex-col items-start justify-center">
            <p className="pb-2 text-start font-head text-lg font-semibold">
              User Details
            </p>
            <div className="flex w-full flex-col space-y-2">
              {/* First Line */}
              <div className="flex w-full space-x-4">
                {/* First Name */}
                <div className="w-full space-y-0.5">
                  <label className="font-head font-semibold text-slate-800">
                    Nama Depan
                  </label>
                  <input
                    disabled
                    value={"Bima"}
                    type="email"
                    className="w-full appearance-none border-2 border-slate-200 bg-gray-50 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:bg-white focus:outline-none"
                  />
                </div>
                {/* Last Name */}
                <div className="w-full space-y-0.5">
                  <label className="font-head font-semibold text-slate-800">
                    Nama Belakang
                  </label>
                  <input
                    disabled
                    value={"Aditya"}
                    type="email"
                    className="w-full appearance-none border-2 border-slate-200 bg-gray-50 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
              {/* Second Line */}
              <div className="flex w-full space-x-4">
                {/* Major */}
                <div className="w-3/4 space-y-0.5">
                  <label className="font-head font-semibold text-slate-800">
                    Program Studi
                  </label>
                  <input
                    disabled
                    value={"Pend. Teknologi Informasi"}
                    type="email"
                    className="w-full appearance-none border-2 border-slate-200 bg-gray-50 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="w-1/4 space-y-0.5">
                  <label className="font-head font-semibold text-slate-800">
                    Angkatan
                  </label>
                  <input
                    disabled
                    value={2019}
                    type="email"
                    className="w-full appearance-none border-2 border-slate-200 bg-gray-50 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
              {/* Third Line */}
              <div className="flex w-full space-x-4">
                {/* Address */}
                <div className="w-full space-y-0.5">
                  <label className="font-head font-semibold text-slate-800">
                    Alamat
                  </label>
                  <input
                    disabled
                    value={"Jl. Pahlawan No.101, Bojonegoro - Bojonegoro"}
                    type="email"
                    className="w-full appearance-none border-2 border-slate-200 bg-gray-50 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetailModal;
