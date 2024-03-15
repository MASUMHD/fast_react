import PropTypes from 'prop-types';
// import { FaBeer } from 'react-icons/fa';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog)
    const {id, title , cover, author,posted_date, author_img, reading_time,hashtags} = blog;
    return (
        <div className='mb-10 mt-10 p-3 border-2 border-red-500 rounded-3xl'>
            <img src={cover} alt={`Cover picture of the title${title}`} />
            <div className='flex justify-between mt-4 mb-4 items-center'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=''>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} 
                    className='ml-2 text-red-600 text-2xl'>
                        <IoBookmarksOutline />
                    </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>

            <p className='mt-4 ml-4'>
                {
                    hashtags.map((hashtag, index) => <span key={index}>#{hashtag}</span>)
                }
            </p>
            <button 
            onClick={() => handleMarkAsRead(id, reading_time)} 
            className='mt-2 ml-4 text-purple-700 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;