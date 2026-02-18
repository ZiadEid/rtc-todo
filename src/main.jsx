import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Store from "./context/Store.jsx";

createRoot(document.getElementById("root")).render(
  <Store>
    <App />
  </Store>,
);

// npm i react-router tailwindcss @tailwindcss/vite -D daisyui@latest
// react-hot-toast
