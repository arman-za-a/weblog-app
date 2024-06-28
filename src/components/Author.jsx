import React from "react";
import { Link } from "react-router-dom";
const Author = ({ avatar , name, slug }) => (
    <li className="pt-4 px-4 pb-0 border-b-1 last:border-none border-[#0000001f]">
        <Link className="flex items-center gap-5 pb-4" to={`/authors/${slug}`}>
            <img className="w-10 h-10 rounded-circle" src={avatar} />
            <span className="text-[#00000099]">{name}</span>
        </Link>
    </li>
);
export default Author;