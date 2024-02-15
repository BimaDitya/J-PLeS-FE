import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ChapterCard = ({ chapterTitle, chapterSlug, chapterPart }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-max w-full flex-row items-center justify-between rounded border border-slate-100 bg-white px-8 py-4 shadow">
      <div className="flex flex-col">
        <p className="font-head text-xl font-semibold">
          {chapterTitle || "Chapter Title"}
        </p>
        <p className="font-head text-slate-400">
          Sub-Materi:&nbsp;{chapterPart || "--"}
        </p>
      </div>
      <button
        onClick={() => navigate(`/user/chapter/${chapterSlug}`)}
        className="rounded bg-slate-600 px-6 py-2.5 font-head font-semibold text-white transition hover:bg-slate-800"
      >
        Lihat Materi
      </button>
    </div>
  );
};

export default ChapterCard;
