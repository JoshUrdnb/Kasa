import { kasaData } from '../../datas/data'
import './main.css'

function Main() {
    return (
        <main>
            <div className="logements-grid">
                {kasaData.map((logement) => (
                    <div key={logement.id} className="logement-card">
                        <img src={logement.cover} alt={logement.title} className="logement-cover" />
                        <div className="logement-title">{logement.title}</div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Main