import { useState, useEffect } from "react";


const images = [
    "/Photos/Festa.jpg",
    "/Photos/concerto.avif",
    "/Photos/festival2.avif",
];

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <aside>
            <h2>Últimos festivais</h2>

            <div className="slideshow-container">
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <img src={images[currentIndex]} alt={`Notícia ${currentIndex + 1}`} className="slide-image" />
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>

            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </aside>
    );
}

export default Gallery;