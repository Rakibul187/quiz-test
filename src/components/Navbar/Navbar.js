import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div>
                <h3>Rsc Quiz Contest</h3>
            </div>
            <div>
                <Link to='home'>Home</Link>
                <Link to='statistics'>Statistics</Link>
                <Link to='blogs'>Blogs</Link>
                <Link to='about'>About</Link>
            </div>
        </div>
    );
};

export default Navbar;