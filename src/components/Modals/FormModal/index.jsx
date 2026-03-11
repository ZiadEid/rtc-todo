import { ErrorMessage, Field, Form, Formik } from "formik";
import { schema } from "./Schema";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { storeContext } from "../../../context/Store";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const FormModal = ({ modalType, todo, closeFormModal, refetch }) => {
  // Status
  const [isLoading, setIsLoading] = useState(false);

  // Hooks
  const { base_url, token, userData } = useContext(storeContext);

  // Vars
  const endPoint = "/todos";

  const genrateTodos = async () => {
    for (let i = 0; i < 200; i++) {
      const data = {
        data: {
          title: `task ${i + 1}`,
          description: "new description",
          user: [userData.id],
        },
      };

      await axios.post(`${base_url}${endPoint}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  };

  const onSubmitHandler = async (values) => {
    setIsLoading(true);
    const data = {
      data: {
        ...values,
        user: [userData.id],
      },
    };

    try {
      if (modalType === "add") {
        await axios.post(`${base_url}${endPoint}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        await axios.put(`${base_url}${endPoint}/${todo.documentId}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      toast.success(
        `${modalType == "add" ? "Created" : "Updated"} Successfuly!`,
        {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          duration: 1500,
        },
      );
      setTimeout(() => {
        closeFormModal();
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
      onClick={closeFormModal}
      className="bg-[#dddddd8c] fixed z-10 left-0 top-0 w-full h-full flex justify-center items-center"
    >
      <Formik
        initialValues={{
          title: todo?.title ?? "",
          description: todo?.description ?? "",
        }}
        validationSchema={schema}
        onSubmit={onSubmitHandler}
      >
        <Form
          onClick={(e) => e.stopPropagation()}
          className="bg-white shadow-2xl rounded-lg w-140 max-w-full p-5 flex flex-col gap-3"
        >
          <h1 className="text-2xl text-gray-900 font-bold">
            {modalType === "add" ? "Create" : "Edit"} Task:
          </h1>

          <Field
            name="title"
            placeholder="task name.."
            className="border border-gray-300 rounded-lg shadow-lg focus:outline-indigo-500 p-2.5 text-lg text-gray-800 font-semibold uppercase placeholder:lowercase"
          />
          <ErrorMessage name="title" component={"p"} className="text-red-500" />
          <Field
            as="textarea"
            name="description"
            placeholder="description.."
            rows="5"
            className="border border-gray-300 rounded-lg shadow-lg focus:outline-indigo-500 p-2.5 text-gray-700"
          />

          <div className="flex items-center gap-3 mt-4">
            <button
              disabled={isLoading}
              type="submit"
              className={`w-${isLoading ? 30 : 20} h-10 px-3 tracking-wider rounded-lg cursor-pointer font-semibold flex justify-center items-center gap-4 duration-200 bg-indigo-500 hover:bg-indigo-400 disabled:bg-indigo-400 text-white active:scale-95 disabled:cursor-not-allowed`}
            >
              {modalType === "add" ? "Create" : "Update"}
              {isLoading && <CgSpinner className="animate-spin" />}
            </button>
            <button
              type="button"
              className="w-20 h-10 px-3 tracking-wider rounded-lg cursor-pointer font-semibold flex justify-center items-center duration-200 bg-gray-200 hover:bg-gray-300 active:scale-95"
              onClick={closeFormModal}
            >
              Cansel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormModal;
