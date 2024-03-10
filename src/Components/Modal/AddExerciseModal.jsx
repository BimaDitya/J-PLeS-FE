import Markdown from "react-markdown";
import { useState } from "react";
import rehypePrism from "rehype-prism-plus";
import { useForm, Controller } from "react-hook-form";

function AddExerciseModal() {
  const { watch, control, register } = useForm();

  const [contents, setContents] = useState("");

  setTimeout(() => {
    const input = watch("code");
    setContents(input);
  }, 7500);
  return (
    <>
      <div className="modal w-screen">
        <label className="modal-overlay" htmlFor="modal-add-exercise"></label>
        <div className="modal-content flex min-w-[75%] flex-col rounded p-4">
          <div className="flex w-full flex-col items-start justify-center">
            <p className="pb-2 text-start font-head text-lg font-semibold text-slate-600">
              Add Exercise
            </p>
            <label
              htmlFor="modal-add-exercise"
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
                <div className="w-full space-y-0.5">
                  <label className="font-head font-semibold text-slate-800">
                    Exercise Title
                  </label>
                  <input className="w-full appearance-none border-2 border-slate-200 bg-gray-50 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:bg-white focus:outline-none" />
                </div>
              </div>
              {/* Second Line */}
              <div className="flex w-full space-x-4">
                <div className="h-full w-full space-y-0.5">
                  <label className="font-head font-semibold text-slate-800">
                    Raw Code
                  </label>
                  <Controller
                    name="code"
                    control={control}
                    render={({ ...field }) => (
                      <textarea
                        {...field}
                        className="h-48 w-full resize-none appearance-none border-2 border-slate-200 bg-gray-50 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:bg-white focus:outline-none"
                        {...register("code")}
                      />
                    )}
                  />
                </div>
                <div className="h-full w-full space-y-0.5">
                  <label className="font-head font-semibold text-slate-800">
                    Preview Code
                  </label>
                  <Markdown
                    className="h-48 w-full resize-none appearance-none border-2 border-slate-200 bg-gray-50 px-2.5 py-1.5 font-body transition-colors focus:border-yellow-400 focus:bg-white focus:outline-none"
                    rehypePlugins={rehypePrism}
                  >
                    {contents}
                  </Markdown>
                </div>
              </div>
            </div>
            <div className="flex w-1/4 flex-row space-x-2">
              <button
                type="submit"
                className="w-full rounded bg-slate-600 px-2 py-2 font-head font-semibold text-white transition hover:bg-slate-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddExerciseModal;
