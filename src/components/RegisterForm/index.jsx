import axios, { AxiosError } from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { schema } from "./Scehma";
import { CgSpinner } from "react-icons/cg";
import { useContext, useState } from "react";
import { storeContext } from "../../context/Store";

const RegisterForm = () => {
  // State
  const [isLoading, setIsLoading] = useState(false);

  // Hooks
  const navigate = useNavigate();
  const { base_url } = useContext(storeContext);

  // Vars
  const endPoint = "/auth/local/register";

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      // fullfiled - success
      await axios.post(`${base_url}${endPoint}`, values);

      toast.success("Register Successfuly!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 1500,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      // reject - faild
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.error?.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          duration: 4000,
        });
      } else {
        toast.error("Unexpected error occurred");
      }
    }
    setIsLoading(false);
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form className="w-100 max-w-full mx-auto mt-2 flex flex-col gap-4">
        <Field
          className="p-3 border border-gray-200 rounded-lg outline-0 shadow-lg"
          name="username"
          type="text"
          placeholder="username"
        />
        <ErrorMessage
          name="username"
          component={"p"}
          className="text-red-500 font-semibold"
        />
        <Field
          className="p-3 border border-gray-200 rounded-lg outline-0 shadow-lg"
          name="email"
          type="email"
          placeholder="email"
        />
        <ErrorMessage
          name="email"
          component={"p"}
          className="text-red-500 font-semibold"
        />
        <Field
          className="p-3 border border-gray-200 rounded-lg outline-0 shadow-lg"
          name="password"
          type="password"
          placeholder="password"
        />
        <ErrorMessage
          name="password"
          component={"p"}
          className="text-red-500 font-semibold"
        />
        {/* Pending */}
        <button
          disabled={isLoading}
          type="submit"
          className="bg-indigo-600 text-white text-lg py-1.5 rounded hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-400 duration-300 flex items-center justify-center gap-4 cursor-pointer active:scale-95"
        >
          Register
          {isLoading && <CgSpinner className="animate-spin" />}
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
