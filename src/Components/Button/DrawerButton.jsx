function DrawerButton() {
  return (
    <>
      <input type="checkbox" id="drawer-left" className="drawer-toggle" />
      <label htmlFor="drawer-left" className="hover:cursor-pointer">
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </label>
      <label className="overlay" htmlFor="drawer-left"></label>
    </>
  );
}

export default DrawerButton;
