import React from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import NotFoundPage from "./NotFoundPage";
import AuthorProfile from "../templates/AuthorProfile";
import AuthorContent from "../templates/AuthorContent";
import AuthorBlogs from "../templates/AuthorBlogs";
import { useParams } from "react-router-dom";
import { useAuthor } from "../hooks/author";
const AuthorDetailsPage = () => {
    const { authorName } = useParams();
    const { loading, error, author } = useAuthor(authorName);
    if (!loading && !error && !author) return <NotFoundPage />;
    return (
        <main className="min-h-[500px] mx-10 lg:mx-12 xl:mx-16">
            {
                loading ? <Loader margin="mt-32" /> : 
                error ? <Error text="خطایی در دریافت اطلاعات نوسینده رخ داده است" margin="mt-32" /> : (() => {
                    const { avatar, name, field, description, posts } = author;
                    return (
                        <>
                            <AuthorProfile avatar={avatar.url} name={name} field={field} />
                            <AuthorContent description={description.text} />
                            <AuthorBlogs posts={posts} />
                        </>
                    );
                })()
            }
        </main>
    );
}
export default AuthorDetailsPage;