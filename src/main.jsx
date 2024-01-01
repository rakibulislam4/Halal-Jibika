import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Route.jsx";
// import { AuthProvider } from "./Provider/ContextProvide.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider>
    </AuthProvider> */}
      <RouterProvider router={routes} />
  </React.StrictMode>
);
