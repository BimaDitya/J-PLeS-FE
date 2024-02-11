import viteLogo from "/vite.svg";
import MainNavbar from "../Components/Navbar/MainNavbar";

function Home() {
  return (
    <>
      <head>
        <tite>Beranda</tite>
      </head>
      <div className="flex h-screen w-screen flex-col bg-slate-50">
        <MainNavbar />
        <div className="flex h-full w-full flex-row items-center">
          <div className="flex w-1/2 flex-row justify-center">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="w-40" alt="Vite logo" />
            </a>
          </div>
          <div className="flex w-1/2 flex-col justify-start space-y-2">
            <h1 className="font-head text-4xl font-bold text-slate-800">
              Beranda
            </h1>
            <p className="w-5/6 text-justify font-body font-medium">
              Vite (French word for &quot;quick&quot;, pronounced /vit/, like
              &quot;veet&quot;) is a build tool that aims to provide a faster
              and leaner development experience for modern web projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
