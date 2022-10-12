import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="flex py-2 px-12 bg-black text-red-700">
                <div className="flex-1">
                    <Link to='/home' className="btn btn-ghost normal-case text-slate-200 text-2xl"><span className='text-orange-500'>Quiz</span>Contest</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-2 text-lg font-semibold">
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