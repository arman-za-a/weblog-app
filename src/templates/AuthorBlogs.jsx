import React from "react";
import Blogs from "../components/Blogs";
const AuthorBlogs = ({ name, posts }) => (
    <section className="mb-16">
        <h3 className="text-2xl">مقالات {name}</h3>
        <div className="mt-8">
            <Blogs list={posts} />
        </div>
    </section>
);
export default AuthorBlogs;