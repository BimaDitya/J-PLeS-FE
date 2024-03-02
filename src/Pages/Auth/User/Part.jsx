import Chapter from "@/Data/Chapter.json";
import PartCard from "@/Components/Card/PartCard";
import UserNavbar from "@/Components/Navbar/UserNavbar";
import { useParams, useNavigate } from "react-router-dom";

const UserPart = () => {
  const { part } = useParams();
  const navigate = useNavigate();
  const dataPart = Chapter.find((item) => item.Slug === part);
  return (
    <div className="h-screen w-screen flex-col overflow-x-hidden text-slate-800">
      <UserNavbar />
      <div className="flex h-full w-full flex-row items-center justify-center px-24 pb-8 pt-16">
        <div className="flex h-full w-full flex-col items-center space-y-2.5 rounded bg-white px-8 pb-8 pt-2.5 shadow">
          <div className="flex w-full flex-row items-center justify-between">
            <button
              className="inline-flex items-center font-head text-lg font-semibold"
              onClick={() => navigate("/user/chapter")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="inherit"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              &nbsp;Kembali
            </button>
            <p className="font-head text-2xl font-bold">Part List</p>
            {/* Balancer */}
            <button
              className="invisible inline-flex items-center font-head text-lg font-semibold"
              onClick={() => navigate("/user/chapter")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="inherit"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              &nbsp;Kembali
            </button>
          </div>
          {!dataPart?.Part ? (
            <div className="flex h-full w-full items-center justify-center border bg-gray-50 p-4">
              <p className="font-head text-2xl font-bold">
                Materi Belum Tersedia
              </p>
            </div>
          ) : (
            <div className="h-full w-full space-y-4 overflow-y-scroll border bg-gray-50 p-4">
              {Object.values(dataPart?.Part || {}).map((item, index) => (
                <PartCard
                  key={index}
                  partSlug={part}
                  partTitle={item?.Title}
                  contentSlug={item?.Slug}
                  partStatus={item?.Status}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserPart;
