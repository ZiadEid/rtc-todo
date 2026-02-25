import { FaFolderPlus } from "react-icons/fa6";

const NoContent = () => {
  return (
    <div className="grow flex flex-col items-center justify-center">
      <div className="-translate-y-30 flex flex-col gap-2 items-center">
        <FaFolderPlus className="text-[170px] text-indigo-500" />
        <p className="text-2xl font-semibold">No Tasks Yet!</p>
        <button className="cursor-pointer text-xl w-32 h-12 rounded bg-indigo-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
          <span className="absolute bg-indigo-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
          <span className="absolute bg-indigo-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default NoContent;
