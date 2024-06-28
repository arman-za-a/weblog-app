import React from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
const Header = () => (
    <header>
        <nav className="fixed top-0 z-20 w-full py-2 px-10 sm:py-4 sm:px-20 bg-primary text-white shadow-2xl">
            <ul className="flex justify-between items-center">
                <li>
                    <h1>
                        <Link className="text-xl sm:text-2xl font-semibold" to="/">وبلاگ اپ</Link>
                    </h1>
                </li>
                <FaBook className="text-xl" />
            </ul>
        </nav>
    </header>
);
export default Header;