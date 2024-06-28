import React from "react";
const Error = ({ text, textAlign = "text-center", margin = "" }) => (
    <h3 className={`text-secondary mb-7 ${textAlign} ${margin}`}>{text}</h3>
);
export default Error;