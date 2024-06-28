import React from "react";
const BlogAuthorProfile = ({ avatar, name, field }) => (
    <section className="flex items-center mb-14">
        <img className="w-20 h-20 rounded-circle ml-4" src={avatar} />
        <div>
            <h3 className="mb-1 text-2xl font-semibold">{name}</h3>
            <span className="text-[#00000099]">{field}</span>
        </div>
    </section>
);
export default BlogAuthorProfile;