import propTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;

    return (
        <div className='border-2 border-emerald-500 border-b-8  rounded-3xl p-3 mt-4 mb-2 bg-green-100'>
            <h3 className='text-xl text-center'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {

    bookmark: propTypes.object
}

export default Bookmark;