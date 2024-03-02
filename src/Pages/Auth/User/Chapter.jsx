import UserNavbar from "@/Components/Navbar/UserNavbar";
import ChapterCard from "@/Components/Card/ChapterCard";
import Chapter from "@/Data/Chapter.json";

const UserChapter = () => {
  return (
    <div className="h-screen w-screen flex-col overflow-x-hidden text-slate-800">
      <UserNavbar />
      <div className="flex h-full w-full flex-row items-center justify-center px-24 pb-8 pt-16">
        <div className="flex h-full w-full flex-col items-center space-y-2.5 rounded bg-white px-8 pb-8 pt-2.5 shadow">
          <p className="font-head text-2xl font-bold">Chapter List</p>
          <div className="h-full w-full space-y-4 overflow-y-scroll border bg-gray-50 p-4">
            {Object.values(Chapter).map((item, index) => (
              <ChapterCard
                key={index}
                chapterTitle={item?.Title}
                chapterSlug={item?.Slug}
                chapterPart={item?.Total}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserChapter;
