import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const PagenationBar = ({ page, totalPages, setPage }) => {
  // Functions
  const prevPage = () => {
    setPage((prev) => prev - 1);
  };
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="info w-1/3">
        <span className="text-gray-500">page</span> {page}{" "}
        <span className="text-gray-500">From</span> {totalPages}
      </div>
      <button
        disabled={page == 1}
        onClick={prevPage}
        className="flex items-center gap-2 py-2 px-5 hover:bg-indigo-500 duration-300 hover:text-white rounded-lg border border-gray-300 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-black"
      >
        <GrLinkPrevious />
        <span>Prev</span>
      </button>
      <button
        disabled={page == totalPages}
        onClick={nextPage}
        className="flex items-center gap-2 py-2 px-5 hover:bg-indigo-500 duration-300 hover:text-white rounded-lg border border-gray-300 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-black"
      >
        <span>Next</span>
        <GrLinkNext />
      </button>
    </div>
  );
};

export default PagenationBar;
