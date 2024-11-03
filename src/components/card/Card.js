import { kasaData } from '../../datas/data'
import { Link } from 'react-router-dom';
import './card.css'

function Card() {
    return (
        <main>
            <div className="logements-grid">
                {kasaData.map((logement) => (
                    <div key={logement.id} className="logement-card">
                        <Link to="/accommodation">
                        <img src={logement.cover} alt={logement.title} className="logement-cover" />
                        <div className="logement-title">{logement.title}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Card
