import React from "react";
const AuthorProfile = ({ avatar, name, field }) => (
    <section className="mt-36 text-center">
        <img className="w-60 h-60 rounded-circle" src={avatar} />
        <h3 className="mt-6 mb-4 text-2xl font-semibold">{name}</h3>
        <span className="text-[#00000099] text-2xl font-normal">{field}</span>
    </section>    
);
export default AuthorProfile;