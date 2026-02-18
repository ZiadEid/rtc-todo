import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { schema } from "./Schema";
import { useContext, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { storeContext } from "../../context/Store";
const LoginForm = () => {
  // State
  const [isLoading, setIsLoading] = useState(false);

  // Hooks
  const navigate = useNavigate();
  const { base_url, login } = useContext(storeContext);

  // Vars
  const endPoint = "/auth/local";

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const res = await axios.post(base_url + endPoint, values);

      login(res.data);

      toast.success("Login Successfuly!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 1500,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.error?.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          duration: 2000,
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
        identifier: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form className="w-100 max-w-full mx-auto mt-2 flex flex-col gap-4">
        <Field
          className="p-3 border border-gray-200 rounded-lg outline-0 shadow-lg"
          name="identifier"
          type="text"
          placeholder="username or email"
        />
        <ErrorMessage
          name="identifier"
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

        <button
          disabled={isLoading}
          type="submit"
          className="bg-indigo-600 text-white text-lg py-1.5 rounded hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-400 duration-300 flex items-center justify-center gap-4 cursor-pointer active:scale-95"
        >
          Login
          {isLoading && <CgSpinner className="animate-spin" />}
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
