import React, { useState } from 'react'
import Gallery from '../gallery/Gallery'
import './carousel.scss'

function Slider({ gallery }) {
    const [currentIndex, setCurrentIndex] = useState(0) // Index de l'image affichée
    const pictures = gallery.pictures // Récupère les images

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length)
    }

    return (
        <div className="slider-container">
            {pictures.length > 1 && (
                <button className="slider-button prev" onClick={prevSlide}>
                    <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                    </svg>
                </button>
            )}

            <Gallery gallery={{ pictures: [pictures[currentIndex]] }} />

            {pictures.length > 1 && (
                <div className="slider-pagination">
                    {currentIndex + 1} / {pictures.length}
                </div>
            )}

            {pictures.length > 1 && (
                <button className="slider-button next" onClick={nextSlide}>
                    <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                    </svg>
                </button>
            )}
        </div>
    )
}

export default Slider