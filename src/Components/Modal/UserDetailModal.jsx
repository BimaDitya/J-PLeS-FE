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
            <label
              htmlFor="modal-user-detail"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-slate-600 hover:bg-red-200 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="inherit"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </label>
            <div className="flex w-full flex-col space-y-2">
              {/* First Line */}
              <div className="flex w-full space-x-4">
                {/* First Name */}
                <div className="w-full space-y-0.5">
                  <label className="font-head font-semibold text-slate-800">
                    First Name
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
                    Last Name
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
                    Study Program
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
                    Force
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
                    Address
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
