const PageLoader = () => {
  return (
    <div className="grow flex justify-center items-center">
      <div className="flex flex-row gap-2 -translate-y-50">
        <div className="w-5 h-5 rounded-full bg-indigo-500 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-5 h-5 rounded-full bg-indigo-500 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-5 h-5 rounded-full bg-indigo-500 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
};

export default PageLoader;
