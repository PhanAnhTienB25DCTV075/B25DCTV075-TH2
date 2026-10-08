function Section({ title, children }) {
    return (
        <section className="section-container">
            <h2>{title}</h2>
            <div className="section-content">
                {children}
            </div>
        </section>
    );
}
export default Section;