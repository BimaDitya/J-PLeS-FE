import Markdown from "react-markdown";
import Content from "@/Data/Content.json";
import { useForm } from "react-hook-form";
import rehypePrism from "rehype-prism-plus";
import UserNavbar from "@/Components/Navbar/UserNavbar";
import { useParams, useNavigate } from "react-router-dom";

const UserContent = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const { part } = useParams();
  const navigate = useNavigate();
  const { content } = useParams();
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
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <p className="font-head text-lg font-semibold">Pertanyaan</p>
                {dataContent?.Questions &&
                  Object.values(dataContent.Questions).map((item, index) => (
                    <div
                      key={index}
                      className="flex w-full flex-col items-end py-0.5"
                    >
                      <div className="flex w-full flex-row items-center space-y-0.5">
                        <label
                          htmlFor={`answers_${index}`}
                          className="w-1/2 font-body"
                        >
                          {index + 1}. {item?.Q}
                        </label>
                        <input
                          id={`answers_${index}`}
                          type="text"
                          className={`w-1/2 appearance-none border-2 border-slate-200 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:outline-none ${
                            errors[`answers_${index}`] ? "border-red-400" : ""
                          }`}
                          {...register(`answers_${index}`, {
                            required: "Masukkan Jawaban Anda!",
                          })}
                        />
                      </div>
                      {errors[`answers_${index}`] && (
                        <p className="font-head text-red-600">
                          {errors[`answers_${index}`].message}
                        </p>
                      )}
                    </div>
                  ))}
                <div className="space-x-4">
                  <button
                    type="submit"
                    className="rounded bg-slate-600 px-6 py-2.5 font-head font-semibold text-white"
                  >
                    Submit
                  </button>
                  <button
                    disabled={!isValid}
                    onClick={() => reset()}
                    className="rounded bg-red-400 px-6 py-2.5 font-head font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserContent;
