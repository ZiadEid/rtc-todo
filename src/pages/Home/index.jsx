import { useLocation } from "react-router";
import SingleTodo from "../../components/SingleTodo";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  // State
  const [todos, setTodos] = useState([]);

  // Vars
  const base_url = "http://localhost:1337";
  const pathName = "/api/todos";
  const userData = JSON.parse(localStorage.getItem("userData"));

  // Functions
  const fetechData = async () => {
    try {
      const { data } = await axios.get(base_url + pathName);
      setTodos(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetechData();
  }, []);

  return (
    <section className="flex flex-col items-center gap-15">
      <h1 className="text-3xl font-bold">
        Welcome, {userData ? userData.username : "Guest"}!
      </h1>
      <div className="w-140 max-w-full flex flex-col gap-3">
        {todos.length > 0 &&
          todos.map((todo, index) => <SingleTodo key={todo.documentId} />)}
      </div>
    </section>
  );
};
export default Home;
