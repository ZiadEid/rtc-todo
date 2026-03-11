import SingleTodo from "../../components/SingleTodo";
import { useContext, useEffect, useState } from "react";
import { storeContext } from "../../context/Store";
import PageLoader from "../../components/PageLoader";
import NoContent from "../../components/NoContent";
import ErrorPage from "../../layouts/Error";
import { useAuthorizedQuery } from "../../hooks/useAuthorizedQuery";
import FormModal from "../../components/Modals/FormModal";
import ConfirmModal from "../../components/Modals/ConfirmModal";
import { FaPlus } from "react-icons/fa6";
import PagenationBar from "../../components/PagenationBar";

const Home = () => {
  // State
  const [modalType, setModalType] = useState(null);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Hooks
  const { userData } = useContext(storeContext);
  const endPoint = `/todos?filters[user][id]=${userData?.id}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  const queryKey = ["todos"];
  const { query } = useAuthorizedQuery(endPoint, queryKey);

  // Vars
  const { data, isLoading, isError, refetch } = query;

  useEffect(() => {
    if (data) {
      setTotalPages(data.meta.pagination.pageCount);
    }
  }, [data]);

  // Functions
  const openFormModal = (todo) => {
    setTodoToEdit(todo);
  };
  const closeFormModal = () => {
    setTodoToEdit(null);
    setModalType(null);
  };

  const openConfirmModal = (todo) => {
    setTodoToDelete(todo);
  };
  const closeConfirmModal = () => {
    setTodoToDelete(null);
  };
  const selectPageSize = (e) => {
    setPageSize(e.target.value);
  };

  useEffect(() => {
    refetch();
  }, [page, pageSize]);

  return (
    <section className="grow flex flex-col items-center gap-7 pb-5">
      <div className="w-full flex flex-col items-center gap-15 relative ">
        <select
          onChange={selectPageSize}
          name=""
          id=""
          className="absolute bottom-2 left-[calc(100%+30px)]"
          defaultValue={pageSize}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
        </select>
        <h1 className="text-3xl font-bold">
          Welcome, {userData ? userData.username : "Guest"}!
        </h1>
        {isLoading || isError ? (
          ""
        ) : (
          <button
            onClick={() => {
              setTimeout(() => {
                setModalType("add");
              }, 200);
            }}
            className="font-medium flex items-center justify-center gap-3 shadow-2xl cursor-pointer text-lg w-32 h-10 rounded-lg bg-indigo-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 active:scale-85"
          >
            <span className="absolute bg-indigo-600 w-40 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-indigo-700 w-40 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            Add Task
            <FaPlus />
          </button>
        )}
      </div>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div
          className={`${!data?.data?.length > 0 && "grow"} w-full flex flex-col gap-3`}
        >
          {isError ? (
            <ErrorPage />
          ) : data?.data?.length ? (
            data?.data?.map((todo, index) => (
              <SingleTodo
                key={todo.documentId}
                todo={todo}
                index={index}
                openFormModal={openFormModal}
                openConfirmModal={openConfirmModal}
                setModalType={setModalType}
              />
            ))
          ) : (
            <NoContent />
          )}
        </div>
      )}
      {modalType && (
        <FormModal
          modalType={modalType}
          todo={todoToEdit}
          closeFormModal={closeFormModal}
          refetch={refetch}
        />
      )}
      {todoToDelete && (
        <ConfirmModal
          documentId={todoToDelete?.documentId}
          closeConfirmModal={closeConfirmModal}
          refetch={refetch}
        />
      )}
      {!isLoading && !isError && data?.data?.length > 0 && (
        <PagenationBar page={page} totalPages={totalPages} setPage={setPage} />
      )}
    </section>
  );
};
export default Home;
