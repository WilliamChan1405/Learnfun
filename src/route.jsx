import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";  // Import the error page
import AnPage from "./pages/AnPage";
import LoginPage from "./pages/LoginPage";
import BookmarkPage from "./pages/BookmarkPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import QuestPage from "./pages/QuestPage"; 
import HomePageLogin from "./pages/HomePageLogin";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,  // Add error handling
    },
    {
        path: '/signup',
        element: <SignUpPage />,
        errorElement: <ErrorPage />,  // Add error handling
    },
    {
        path: '/login',
        element: <LoginPage />,
        errorElement: <ErrorPage />,  // Add error handling
    },
    {
        path: '/profile',
        element: <ProfilePage />,
        errorElement: <ErrorPage />,  // Add error handling
    },
    {
        path: '/answer/:questionId',
        element: <AnPage />,
        errorElement: <ErrorPage />,  // Add error handling
    },
    {
        path: '/book',
        element: <BookmarkPage />,
        errorElement: <ErrorPage />,  // Add error handling
    },
    {
        path: '/change',
        element: <ChangePasswordPage />,
        errorElement: <ErrorPage />,  // Add error handling
    },{
        path: '/quest',
        element: <QuestPage />,
        errorElement: <ErrorPage />,  // Add error handling
    },{
        path: '/HomePageLogin',
        element: <HomePageLogin />,
        errorElement: <ErrorPage />,
    },
 
]);
