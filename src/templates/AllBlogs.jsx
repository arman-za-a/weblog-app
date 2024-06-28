import React from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Blogs from "../components/Blogs";
import { useBlogs } from "../hooks/blog";
const AllBlogs = () => {
    const { loading, error, blogs } = useBlogs();
    return (
        <section className="col-span-12 lg:col-span-9">
            <h3 className="font-semibold mb-7">مقالات</h3>
            {
                loading ? <Loader textAlign="text-right" /> :
                error ? <Error text="خطایی در دریافت مقاله ها رخ داده است" textAlign="text-right" /> : 
                <Blogs list={blogs} />
            }
        </section>
    );
};
export default AllBlogs;