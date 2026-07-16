import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Page/Home/Home";
import Sign from "../components/Page/Sign/Sign";
import Profil from "../components/Page/Profil/Profil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "sign", element: <Sign /> },
      { path: "profil", element: <Profil /> },
    ],
  },
]);