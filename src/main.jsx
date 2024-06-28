import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import client from "./configs/apollo.js";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import "./styles/fonts.css";
ReactDOM.createRoot(document.getElementById("root")).render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
);