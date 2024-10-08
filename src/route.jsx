import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/signup',
        element: <SignUpPage />,
    },

]);


