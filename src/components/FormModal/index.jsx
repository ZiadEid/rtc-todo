import { ErrorMessage, Field, Form, Formik } from "formik";

const FormModal = ({ todo, closeFormModal }) => {
  return (
    <div
      onClick={closeFormModal}
      className="bg-[#dddddd8c] fixed z-10 left-0 top-0 w-full h-full flex justify-center items-center"
    >
      <Formik
        initialValues={{
          title: todo ? todo.title : "",
        }}
      >
        <Form className="bg-white shadow-2xl rounded w-140 max-w-full py-10 px-5 flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Edit Task:</h1>
          <Field
            name="title"
            className="focus:border focus:outline-indigo-500 border py-2 px-5 rounded-lg"
          />
          <ErrorMessage name="title" component={"p"} className="text-red-500" />
          <div className="flex items-center justify-center gap-3">
            <button className="bg-indigo-500 w-30 h-10 rounded-lg cursor-pointer text-white font-semibold flex justify-center items-center">
              Save
            </button>
            <button className="bg-gray-200 w-30 h-10 rounded-lg cursor-pointer font-semibold flex justify-center items-center">
              Cansel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormModal;
