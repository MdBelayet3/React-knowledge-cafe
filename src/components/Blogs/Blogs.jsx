import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToButton, handleReadingTime}) => {

    // useState and useEffect hooks for loaded data from local storage
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog handleReadingTime={handleReadingTime} handleAddToButton={handleAddToButton} blog={blog} key={blog.id} ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToButton : PropTypes.func.isRequired,
    handleReadingTime : PropTypes.func.isRequired
}

export default Blogs;