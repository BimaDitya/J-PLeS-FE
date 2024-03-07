const Searchbar = () => {
  return (
    <form className="flex w-1/4 items-center" noValidate>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="w-full appearance-none border-2 border-slate-200 bg-white px-2.5 py-1.5 font-head transition-colors focus:border-yellow-400 focus:outline-none"
          placeholder="Search Subject..."
          required
        />
      </div>
      <button
        type="submit"
        className="btn mx-2 rounded bg-slate-600 p-3 font-head font-semibold text-white transition hover:bg-slate-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
            clipRule="evenodd"
          />
        </svg>

        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};
export default Searchbar;
