import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, readingTime }) => {
    // console.log(bookmarks);
    return (
        <div className="md:w-1/3 ml-6 my-9">
            <h1 className='mb-6 text-[#6047EC] text-center text-2xl p-5 border-2 border-[#6047EC] bg-[#6047EC1A] rounded-xl'>Spent time on read : {readingTime} min</h1>
            <div className=' p-8 rounded-xl bg-[#0808080d]'>
                <h3 className="text-2xl mb-4">Bookmarked Blogs : {bookmarks.length}</h3>
                <div className='flex flex-col gap-4'>
                    {
                        bookmarks.map((bookmark,idx) => <h3 className='p-5 bg-white rounded-3xl text-xl' key={idx}>{bookmark.title}</h3>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;