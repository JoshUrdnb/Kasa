import { Link } from 'react-router-dom'
import './card.css'

function Card({ housings }) { //Je passe {housings} comme argument de ma fonction Card.
    return (
        <div className='container'>
            <div className="housings-grid">
                {housings.map((housing) => (
                    <div key={housing.id} className="housing-card">
                        <Link to={`/accommodation/${housing.id}`}>
                            <img src={housing.cover} alt={housing.title} className="housing-cover" />
                            <div className="logement-title">{housing.title}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card