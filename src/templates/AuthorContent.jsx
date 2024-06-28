import React from "react";
const AuthorContent = ({ description }) => (
    <section className="mt-10 mb-14 [&_p]:my-4 [&_h3]:my-5 [&_h4]:my-5" 
        dangerouslySetInnerHTML={{ __html: description }}>
    </section>
);
export default AuthorContent;