import { Link } from 'react-router-dom'
import './card.css'

function Card({ housing }) { // Reçoit un logement individuel en tant que prop
    return (
        <div className="housing-card">
            <Link to={`/accommodation/${housing.id}`}>
                <img src={housing.cover} alt={housing.title} className="housing-cover" />
                <div className="housing-title">{housing.title}</div>
            </Link>
        </div>
    )
}

export default Card