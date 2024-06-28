import React from "react";
const Comment = ({ name, text }) => (
    <div className="p-4 border-1 border-[#beb9b9] rounded mx-2 mb-5">
        <span className="inline-flex justify-center items-center w-10 h-10 rounded-[50%] ml-2 bg-[#bdbdbd] text-white
            font-semibold">{name[0]}
        </span>
        <span className="font-semibold">{name}</span>
        <p className="mt-6">{text}</p>
    </div>
);
export default Comment;