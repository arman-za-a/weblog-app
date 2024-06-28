import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
const BlogBanner = ({ title, coverPhoto }) => {
    const navigate = useNavigate();
    return (
        <section>
            <div className="flex justify-between items-center mt-36">
                <h2 className="text-primary text-xl md:text-3xl font-semibold">{title}</h2>
                <FaArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />
            </div>
            <img className="w-full rounded-2xl mt-9 mb-14" src={coverPhoto} />
        </section>
    )
};
export default BlogBanner;