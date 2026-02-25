const SingleTodo = ({ todo, ophenFormModal }) => {
  return (
    <div
      className="
        flex items-center justify-between
        p-3 rounded-lg shadow relative overflow-hidden
        bg-white
        transition-all duration-300
        hover:shadow-lg hover:-translate-y-0.5
        group
      "
    >
      {/* Hover background spread */}
      <span
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          w-2 h-2 rounded-full bg-indigo-50
          transition-all duration-500 ease-out
          -translate-x-8
          group-hover:translate-x-0
          group-hover:scale-[125]
        "
      ></span>

      {/* Content */}
      <p className="text-lg relative z-10 transition-colors">{todo.title}</p>

      <div className="flex gap-3 relative z-10">
        <button
          onClick={()=> ophenFormModal(todo)}
          className="
            bg-indigo-500 text-white px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-indigo-600 active:scale-95"
        >
          Edit
        </button>

        <button
          className="
            bg-red-600 text-white px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-red-700 active:scale-95"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
