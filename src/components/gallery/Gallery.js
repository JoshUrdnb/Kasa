import './gallery.scss'

function Gallery({gallery}) {
    return (
        <div className="gallery-container">
            {gallery.pictures.map((picture, index) => (
                <img 
                    key={index} 
                    src={picture} 
                    alt={`${gallery.name} ${index + 1}`} 
                    className="gallery-picture"
                />
            ))}
        </div>
    )
}

export default Gallery