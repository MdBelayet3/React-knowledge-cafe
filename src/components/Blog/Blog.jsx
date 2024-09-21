import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='my-9'>
            <img className='w-full' src={cover} alt={`Cover image of ${title}`} />
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
                    </div>
                </div>
                <h1 className='text-4xl'>{title}</h1>
                <p>
                    {
                        hashtags.map((hash, idx) => <span key={idx}><a className='text-blue-500 hover:text-black' href="">#{hash}</a>&nbsp;&nbsp;&nbsp;</span>)
                    }
                </p>
                <button className='text-black bg-gray-200 p-2 rounded-lg w-[110px] hover:bg-blue-500 hover:border-b-black'>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;