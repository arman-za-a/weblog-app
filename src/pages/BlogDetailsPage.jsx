import React from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import NotFoundPage from "./NotFoundPage";
import BlogBanner from "../templates/BlogBanner";
import BlogAuthorProfile from "../templates/BlogAuthorProfile";
import BlogContent from "../templates/BlogContent";
import Form from "../templates/Form";
import Comments from "../templates/Comments";
import { useBlog } from "../hooks/blog";
import { useParams } from "react-router-dom";
const BlogDetailsPage = () => {
    const { blogTitle } = useParams();
    const { loading, error, blog } = useBlog(blogTitle);
    if (!loading && !error && !blog) return <NotFoundPage />;
    return (
        <main className="min-h-[500px] mx-10 lg:mx-12 xl:mx-16">
            {
                loading ? <Loader margin="mt-32" /> :
                error ? <Error text="خطایی در دریافت اطلاعات مقاله رخ داده است" margin="mt-32" /> : (() => {
                    const { title, cover_photo, author, content, comments } = blog;
                    return (
                        <>
                            <BlogBanner title={title} coverPhoto={cover_photo.url} />
                            <BlogAuthorProfile avatar={author.avatar.url} name={author.name} field={author.field} />
                            <BlogContent content={content.text} />
                            <Form />
                            <Comments list={comments} /> 
                        </>
                    )
                })()
            }
        </main>
    );
}
export default BlogDetailsPage; 