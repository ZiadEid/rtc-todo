import SingleTodo from "../../components/SingleTodo";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { storeContext } from "../../context/Store";
import { useQuery } from "@tanstack/react-query";
import PageLoader from "../../components/PageLoader";
import NoContent from "../../components/NoContent";
import ErrorPage from "../../layouts/Error";
import { useAuthorizedQuery } from "../../hooks/useAuthorizedQuery";
import FormModal from "../../components/FormModal";

const Home = () => {
  // State
  const [todo, setTodo] = useState(null);
  // Vars
  const endPoint = "/users/me?populate=todos";
  const queryKey = ["todos"];

  // Hooks
  const { userData } = useContext(storeContext);
  const { query, deDuplicates } = useAuthorizedQuery(endPoint, queryKey);

  const { data, isLoading, isError } = query;

  const todos = deDuplicates(data?.todos);

  // Functions
  const ophenFormModal = (todo) => {
    setTodo(todo);
  };

  const closeFormModal = () => {
    setTodo(null);
  };

  // if (isError) {
  //   return <ErrorPage />
  // }

  return (
    <section className="grow flex flex-col items-center gap-15">
      <h1 className="text-3xl font-bold">
        Welcome, {userData ? userData.username : "Guest"}!
      </h1>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="grow w-full flex flex-col gap-3">
          {isError ? (
            <ErrorPage />
          ) : todos.length ? (
            todos.map((todo) => (
              <SingleTodo
                key={todo.documentId}
                todo={todo}
                ophenFormModal={ophenFormModal}
              />
            ))
          ) : (
            <NoContent />
          )}
        </div>
      )}
      {todo && <FormModal todo={todo} closeFormModal={closeFormModal} />}
    </section>
  );
};
export default Home;
