import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";
import CartDisplay from "./pages/CartDisplay.jsx";
import Payment from "./pages/Payment.jsx";

export const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/showcart", element: <CartDisplay /> },
  { path: "/pay", element: <Payment /> },
]);
