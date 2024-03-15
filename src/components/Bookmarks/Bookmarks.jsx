import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 border-2 border-blue-500 bg-slate-200 rounded-3xl p-5 ml-5">

            <div className="border-2 border-emerald-500  border-b-8  rounded-3xl p-3  mb-2">
                <h2 className="text-xl text-center font-bold">
                    Reading Time: {readingTime}
                </h2>
            </div>

            <h2 className="text-3xl font-bold">
                Bookmarks: {bookmarks.length}
            </h2>
            
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;