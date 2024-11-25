import { Link } from 'react-router-dom'
import './card.scss'

function Card({ housing }) { // Reçoit un logement individuel en tant que prop
    return (
        <article className="housing-card">
            <Link to={`/accommodation/${housing.id}`}>
                <img src={housing.cover} alt={housing.title} className="housing-cover" />
                <div className="housing-title">{housing.title}</div>
            </Link>
        </article>
    )
}

export default Card