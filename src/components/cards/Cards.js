import Card from '../card/Card'
import './cards.css'

function Cards({ housings }) { //Je passe {housings} comme argument de ma fonction Cards.
    return (
        <section className='container'>
            <div className="housings-grid">
                {housings.map((housing) => (
                    <Card key={housing.id} housing={housing} /> // Utilise le composant Card
                ))}
            </div>
        </section>
    )
}

export default Cards