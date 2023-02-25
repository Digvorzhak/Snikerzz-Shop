import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import EditProduct from "./pages/EditProduct";
import "./App.css";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/new-product", element: <NewProduct /> },
      { path: "/edit-product/:id", element: <EditProduct /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
