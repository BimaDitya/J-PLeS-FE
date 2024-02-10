import LoginCard from "../../Components/Card/LoginCard";
import SecondaryNavbar from "../../Components/Navbar/SecondaryNavbar";

function Login() {
  return (
    <div className="h-screen w-screen flex flex-col bg-slate-50">
      <SecondaryNavbar />
      <div className="flex h-full w-full flex-row justify-center items-center">
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;
