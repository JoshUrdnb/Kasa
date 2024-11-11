import './gallery.css'

function Gallery({gallery}) {
    return (
        <div className="gallery-container">
            {gallery.pictures.map((picture, index) => (
                <img 
                    key={index} 
                    src={picture} 
                    alt={`${gallery.name} ${index + 1}`} 
                />
            ))}
        </div>
    )
}

export default Gallery