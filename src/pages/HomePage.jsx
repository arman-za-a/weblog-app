import React from "react";
import Authors from "../templates/Authors";
import AllBlogs from "../templates/AllBlogs";
const HomePage = () => (
    <main className="grid grid-cols-12 gap-x-5 gap-y-12 min-h-[500px] mx-10 lg:mx-12 xl:mx-16 mt-32 mb-24">
        <Authors />
        <AllBlogs />
    </main>
);
export default HomePage;