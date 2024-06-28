import React from "react";
import HomePage from "../pages/HomePage";
import AuthorDetailsPage from "../pages/AuthorDetailsPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/authors/:authorName", element: <AuthorDetailsPage /> },
    { path: "/blogs/:blogTitle", element: <BlogDetailsPage /> },
    { path: "*", element: <NotFoundPage /> }
]; 
export default routes;