function BookCard({ book, isFav, toggleFav }) {
    return (
        <div className="book-card">
            <h3>{book.name}</h3>
            <p><strong>Tác giả:</strong> {book.author}</p>
            <p><strong>Thể loại:</strong> {book.genre}</p>
            <p><strong>Năm xuất bản:</strong> {book.year}</p>
            <div className="card-actions">
                <button 
                    className={`btn-fav ${isFav ? 'active' : ''}`}
                    onClick={() => toggleFav(book.id)}
                >
                    {isFav ? '❤️ Đã thích' : '🤍 Yêu thích'}
                </button>
            </div>
        </div>
    );
}
export default BookCard;