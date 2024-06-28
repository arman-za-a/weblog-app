import React from "react";
const BlogContent = ({ content }) => (
    <section className="[&_p]:my-4 [&_h3]:my-5 [&_h4]:my-5" dangerouslySetInnerHTML={{ __html: content }}></section>
);
export default BlogContent;