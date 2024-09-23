import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToButton, handleReadingTime }) => {
    const {id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='my-9'>
            <img className='w-full rounded-3xl' src={cover} alt={`Cover image of ${title}`} />
            <div className='flex flex-col gap-5 mt-8'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <img className='w-16 h-16' src={author_img} alt={`author_name`} />
                        <div className='ml-6'>
                            <h4 className='text-2xl'>{author}
                                <p>{posted_date}</p>
                            </h4>
                        </div>
                    </div>
                    <div>
                        <span>{reading_time} min read</span>     
                <button onClick={() => handleAddToButton(blog)} className=' bg-gray-200 p-2 rounded-lg ml-2 text-2xl text-red-600 hover:bg-blue-500 hover:border-b-black'><FaBookmark /></button>
                    </div>
                </div>
                <h1 className='text-4xl'>{title}</h1>
                <p>
                    {
                        hashtags.map((hash, idx) => <span key={idx}><a className='text-blue-500 hover:text-black' href="">#{hash}</a>&nbsp;&nbsp;&nbsp;</span>)
                    }
                </p>
                <a onClick={() => handleReadingTime(reading_time,id)} className='text-[#6047EC] text-2xl hover:text-[26px] cursor-pointer w-40 underline'>Mark as read</a>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToButton: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
}

export default Blog;