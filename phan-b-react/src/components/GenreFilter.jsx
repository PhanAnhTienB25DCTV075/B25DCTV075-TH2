function GenreFilter({ genres, selectedGenre, onSelect }) {
    return (
        <div className="genre-filter">
            {genres.map(genre => (
                <button 
                    key={genre}
                    className={`btn-genre ${selectedGenre === genre ? 'active' : ''}`}
                    onClick={() => onSelect(genre)}
                >
                    {genre === 'All' ? 'Tất cả thể loại' : genre}
                </button>
            ))}
        </div>
    );
}
export default GenreFilter;