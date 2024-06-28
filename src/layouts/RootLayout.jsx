import React from "react";
import Header from "../templates/Header";
import Footer from "../templates/Footer";
const RootLayout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);
export default RootLayout;