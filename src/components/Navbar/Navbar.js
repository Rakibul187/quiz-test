import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gray-400">
                <div className="flex-1">
                    <Link to='/home' className="btn btn-ghost normal-case text-fuchsia-700 text-2xl">QuizContest</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-2">
                        <li><Link to='/home'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='statistics'>
                                Statistics
                            </Link>
                        </li>
                        <li><Link to='blogs'>Blogs</Link></li>
                        <li><Link to='about'>About</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;