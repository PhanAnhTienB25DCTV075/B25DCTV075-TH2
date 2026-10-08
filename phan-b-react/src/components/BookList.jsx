import BookCard from './BookCard';

function BookList({ books, favs, toggleFav }) {
    if (books.length === 0) return <p>Không có cuốn sách nào.</p>;
    
    return (
        <div className="book-grid">
            {books.map(book => (
                <BookCard 
                    key={book.id} 
                    book={book} 
                    isFav={favs.includes(book.id)}
                    toggleFav={toggleFav}
                />
            ))}
        </div>
    );
}
export default BookList;