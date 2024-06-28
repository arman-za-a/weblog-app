import React from "react";
import Comment from "../components/Comment";
const Comments = ({ list }) => Boolean(list.length) && (
    <section className="mt-12 px-4 pb-5 rounded-2xl shadow-xl">
        <h3 className="mb-4 text-primary text-xl font-semibold">کامنت ها</h3>
        {list.map(comment => 
            <Comment 
                key={comment.id} 
                name={comment.name}
                text={comment.text}
            />
        )}
    </section>
);
export default Comments;