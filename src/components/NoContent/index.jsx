import { LuListTodo } from "react-icons/lu";
const NoContent = () => (
  <div className="flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
    <div className="bg-white p-4 rounded-full shadow-sm mb-4">
      <LuListTodo className="text-indigo-500" size={48} />
    </div>
    <h3 className="text-lg font-bold text-gray-800">No tasks yet</h3>
    <p className="text-gray-500 text-center max-w-62.5 mt-1">
      Your productivity starts here. Add your first todo to get the ball
      rolling!
    </p>
  </div>
);

export default NoContent;
