import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { schema } from "./Schema";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
const LoginForm = () => {
  // State
  const [isLoading, setIsLoading] = useState(false);

  // Hooks
  const navigate = useNavigate();

  // Vars
  const base_url = "http://localhost:1337";
  const pathName = "/api/auth/local";

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const res = await axios.post(base_url + pathName, values);
      localStorage.setItem("token", JSON.stringify(res.data.jwt));
      localStorage.setItem("userData", JSON.stringify(res.data.user));
      toast.success("Login Successfuly!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 1500,
      });
      setTimeout(() => {
        location.replace("/");
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
