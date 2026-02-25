const ErrorPage = () => {
  return (
    <div className="w-140 max-w-full">
      <h1>Something went wrong</h1>
      <button
        onClick={() => {
          location.reload();
        }}
      >
        Home
      </button>
    </div>
  );
};

export default ErrorPage;
