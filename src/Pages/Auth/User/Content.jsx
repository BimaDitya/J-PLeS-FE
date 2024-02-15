import Content from "@/Data/Content.json";
import UserNavbar from "@/Components/Navbar/UserNavbar";
import { useParams, useNavigate } from "react-router-dom";
import Markdown from "react-markdown";
import rehypePrism from "rehype-prism-plus";

const UserContent = () => {
  const { part } = useParams();
  const { content } = useParams();
  const navigate = useNavigate();
  const dataContent = Content.find((item) => item?.Slug === content);
  return (
    <div className="h-screen w-screen flex-col overflow-x-hidden bg-slate-50 text-slate-800">
      <UserNavbar />
      <div className="flex h-[92.5%] w-full flex-row items-center justify-center px-24 py-8">
        <div className="flex h-full w-full flex-col items-center space-y-2.5 rounded bg-white px-8 py-4 shadow">
          <div className="flex w-full flex-row items-center justify-between">
            <button
              className="inline-flex items-center font-head text-lg font-semibold"
              onClick={() => navigate(`/user/chapter/${part}`)}
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
            <p className="font-head text-2xl font-bold">
              {dataContent?.Title || "Content"}
            </p>
            {/* Balancer */}
            <button
              className="invisible inline-flex items-center font-head text-lg font-semibold"
              onClick={() => navigate(`/user/chapter/${part}`)}
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
          {!dataContent?.Content ? (
            <div className="flex h-full w-full items-center justify-center border bg-gray-50 p-4">
              <p className="font-head text-2xl font-bold">
                Konten Belum Tersedia
              </p>
            </div>
          ) : (
            <div className="h-full w-full space-y-4 overflow-y-scroll border bg-gray-50 p-4">
              <Markdown rehypePlugins={rehypePrism}>
                {dataContent?.Content}
              </Markdown>
              <div>
                <p className="font-head text-lg font-semibold">Pertanyaan</p>
                {Object.values(dataContent?.Questions).map((item, index) => (
                  <p key={index} className="py-1.5 font-body">
                    {index + 1}.&nbsp;{item?.Q}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserContent;
