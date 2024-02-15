import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PartCard = ({ partTitle, partSlug, partStatus, contentSlug }) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-max w-full flex-row items-center justify-between rounded border border-slate-100 bg-white px-8 py-4 shadow">
      <div className="flex flex-col">
        <p className="font-head text-xl font-semibold">
          {partTitle || "Part Title"}
        </p>
        <div className="inline-flex font-head text-slate-400">
          Status:&nbsp;
          <p
            className={`font-semibold ${partStatus === "Tuntas" ? "text-green-600" : partStatus === "Belum Tuntas" ? "text-yellow-600" : "text-slate-600"}`}
          >
            {partStatus || "Belum Dikerjakan"}
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate(`/user/chapter/${partSlug}/${contentSlug}`)}
        className="rounded bg-slate-600 px-6 py-2.5 font-head font-semibold text-white transition hover:bg-slate-800"
      >
        Pelajari
      </button>
    </div>
  );
};

export default PartCard;
