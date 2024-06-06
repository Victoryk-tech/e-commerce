import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App.jsx";
import "./index.css";
import ContextProvider from "../src/Component/features/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
