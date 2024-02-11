import SecondaryNavbar from "@/Components/Navbar/SecondaryNavbar";
import RegistrationForm from "@/Components/Form/RegistrationForm";

function Registration() {
  return (
    <div className="h-screen w-screen flex flex-col bg-slate-50">
      <SecondaryNavbar />
      <div className="flex h-full w-full flex-row items-center justify-center">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Registration;
