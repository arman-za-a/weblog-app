import React from "react";
import { Link } from "react-router-dom";
const Blog = ({ title, coverPhoto, slug }) => (
    <div className="overflow-hidden rounded-2xl shadow-xl">
        <img className="w-full h-48 object-cover" src={coverPhoto} />
        <div className="mt-1 mx-2 mb-5">
            <h3 className="border-solid border-b-1 border-[#0000001f] pb-6 text-xl font-medium">{title}</h3>
        </div>
        <div className="pt-0 px-2 pb-2">
            <Link className="w-full border-1 border-primary rounded-2xl text-primary text-sm/7 text-center 
                hover:border-primary-dark transit" to={`/blogs/${slug}`}>مطالعه مقاله
            </Link>
        </div>
    </div>
);
export default Blog;