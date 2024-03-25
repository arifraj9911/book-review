

const WishListBooks = ({book}) => {
    const { bookId,bookName, author, image, rating, category, tags } = book;
    return (
        <div>
            {bookName}
        </div>
    );
};

export default WishListBooks;