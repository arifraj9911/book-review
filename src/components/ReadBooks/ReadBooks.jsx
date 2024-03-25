import PropTypes from 'prop-types';

const ReadBooks = ({book}) => {
    const { bookId,bookName, author, image, rating, category, tags } = book;
    return (
        <div>
            <h2>{bookName}</h2>
        </div>
    );
};

ReadBooks.propTypes = {
    book:PropTypes.object
}

export default ReadBooks;