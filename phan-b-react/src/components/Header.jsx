function Header({ favCount, isDarkMode, toggleTheme }) {
    return (
        <header className="header">
            <h1>📚 Thư Viện Của Lớp</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button onClick={toggleTheme} className="btn-theme">
                    {isDarkMode ? '☀️ Giao diện Sáng' : '🌓 Giao diện Tối'}
                </button>
                <div className="fav-badge">❤️ Yêu thích: {favCount}</div>
            </div>
        </header>
    );
}
export default Header;