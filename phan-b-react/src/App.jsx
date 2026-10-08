import { useState, useEffect } from 'react';
import { booksData } from './data/books'; 
import Header from './components/Header';
import Section from './components/Section';
import GenreFilter from './components/GenreFilter';
import BookList from './components/BookList';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  const [books] = useState(booksData);
  const [favs, setFavs] = useState([]); 
  const [selectedGenre, setSelectedGenre] = useState('All');
  
  // Thêm State quản lý chế độ Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const genres = ['All', ...new Set(books.map(b => b.genre))];

  const toggleFav = (id) => {
    setFavs(prevFavs => 
      prevFavs.includes(id) 
        ? prevFavs.filter(favId => favId !== id)
        : [...prevFavs, id]
    );
  };

  // Áp dụng class dark-mode vào thẻ body khi state thay đổi
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const filteredBooks = selectedGenre === 'All' 
    ? books 
    : books.filter(b => b.genre === selectedGenre);

  return (
    <div className="app-container">
      {/* Truyền state và hàm toggle xuống Header */}
      <Header 
        favCount={favs.length} 
        isDarkMode={isDarkMode} 
        toggleTheme={() => setIsDarkMode(!isDarkMode)} 
      />
      
      <main className="main-content">
          <Section title="Lọc theo thể loại">
            <GenreFilter 
                genres={genres} 
                selectedGenre={selectedGenre} 
                onSelect={setSelectedGenre} 
            />
          </Section>

          <Section title="Danh sách Sách">
            <p className="status-text">Đang hiển thị {filteredBooks.length} / {books.length} cuốn</p>
            <BookList 
                books={filteredBooks} 
                favs={favs} 
                toggleFav={toggleFav} 
            />
          </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;