import React from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Author from "../components/Author";
import { useAuthors } from "../hooks/author";
const Authors = () => {
    const { loading, error, authors } = useAuthors();
    return (
        <section className="col-span-12 lg:col-span-3">
            <h3 className="mb-7 font-semibold">نویسنده ها</h3> 
            {
                loading ? <Loader textAlign="text-right" /> : 
                error ? <Error text="خطایی در دریافت نوسینده ها رخ داده است" textAlign="text-right" /> : 
                <ul className="rounded-2xl shadow-xl">
                    {authors.map(author => 
                        <Author 
                            key={author.id} 
                            avatar={author.avatar.url}
                            name={author.name}
                            slug={author.slug}
                        />        
                    )}
                </ul>
            }
        </section>
    );
};
export default Authors;