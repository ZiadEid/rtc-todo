import axios from "axios";
import { useContext, useState } from "react";
import { storeContext } from "../../../context/Store";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const ConfirmModal = ({ documentId, closeConfirmModal, refetch }) => {
  // Status
  const [isLoading, setIsLoading] = useState(false);

  // Hooks
  const { base_url, token } = useContext(storeContext);

  // Vars
  const endPoint = "/todos";

  const onSubmitHandler = async () => {
    setIsLoading(true);

    try {
      await axios.delete(`${base_url}${endPoint}/${documentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Deleted Successfuly!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 1500,
      });

      setTimeout(() => {
        closeConfirmModal();
      }, 1600);
      refetch();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.error?.message ?? error?.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          duration: 4000,
        });
      } else {
        toast.error("Unexpected error occurred", {
          duration: 4000,
        });
      }
    }
    setIsLoading(false);
  };

  return (
    <div
      onClick={closeConfirmModal}
      className="bg-[#dddddd8c] fixed z-10 left-0 top-0 w-full h-full flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white shadow-2xl rounded-lg w-140 max-w-full p-5 flex flex-col gap-3"
      >
        <h1 className="text-xl text-gray-900 font-bold">
          Are you sure you want to delete this task?
        </h1>
        <p className="text-gray-700 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          ipsam, quasi in voluptatem autem nisi, voluptatum nihil voluptas sit
          laboriosam voluptates perspiciatis consequatur molestias cum odit,
          dolor mollitia? Voluptatem, vero.
        </p>
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={onSubmitHandler}
            disabled={isLoading}
            type="submit"
            className={`w-${isLoading ? 30 : 20} h-10 px-3 tracking-wider rounded-lg cursor-pointer font-semibold flex justify-center items-center gap-4 duration-200 bg-red-500 hover:bg-red-400 disabled:bg-red-400 text-white active:scale-95  py-1.5 disabled:cursor-not-allowed`}
          >
            Delete
            {isLoading && <CgSpinner className="animate-spin" />}
          </button>
          <button
            type="button"
            className="w-20 h-10 px-3 tracking-wider rounded-lg cursor-pointer font-semibold flex justify-center items-center duration-200 bg-gray-200 hover:bg-gray-300 active:scale-95"
            onClick={closeConfirmModal}
          >
            Cansel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
