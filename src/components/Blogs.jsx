import React from "react";
import Blog from "./Blog";
const Blogs = ({ list }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4">
        {list.map(blog => 
            <Blog 
                key={blog.id} 
                title={blog.title}
                coverPhoto={blog.cover_photo.url}
                slug={blog.slug}
            />
        )}
    </div>
); 
export default Blogs;