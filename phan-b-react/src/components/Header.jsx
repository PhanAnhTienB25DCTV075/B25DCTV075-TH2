function Header({ favCount }) {
    return (
        <header className="header">
            <h1>📚 Thư Viện Của Lớp</h1>
            <div className="fav-badge">❤️ Yêu thích: {favCount}</div>
        </header>
    );
}
export default Header;