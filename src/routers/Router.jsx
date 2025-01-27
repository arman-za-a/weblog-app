import React from "react";
import routes from "../data/routes";
import { Routes, Route } from "react-router-dom";
const Router = () => (
    <Routes>
        {routes.map(route => <Route key={route.path} {...route} />)}
    </Routes>
);
export default Router;