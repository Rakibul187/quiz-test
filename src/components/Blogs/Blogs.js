import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='m-12 gap-5'>
            <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                <h3 className='text-xl font-bold my-2'>What is the purpose of react router ?</h3>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                <h3 className='text-xl font-bold my-2'>How does context API works ?</h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                <h3 className='text-xl font-bold my-2'>How does useRef hook works ?</h3>
                <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called </p>
            </div>
        </div>
    );
};

export default Blogs;