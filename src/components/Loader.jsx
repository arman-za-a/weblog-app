import React from "react";
import loader from "../assets/gradient-5812_128.gif";
const Loader = ({ textAlign = "text-center", margin = "" }) => (
    <div className={`${textAlign} ${margin}`}>
        <img className="w-12 h-12" src={loader} />
    </div>
);
export default Loader;