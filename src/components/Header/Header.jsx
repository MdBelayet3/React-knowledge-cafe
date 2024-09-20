import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
    
    // useState and useEffect hooks for loaded data from local storage
    const [blogs, setBlogs] =useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data));
    },[])

    return (
        <div>
            <h1 className='text-6xl bg-red-600'>Knowledge Cafe</h1>
        </div>
    );
};

export default Header;