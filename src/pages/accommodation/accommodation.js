import './accommodation.css'
import { useParams } from 'react-router-dom' // Pour accéder aux paramètres d'URL
import { kasaData } from '../../datas/data' // Importe les données de logements
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'

export default function Accommodation() {
    const { id } = useParams() // Récupère l'ID du logement depuis l'URL
    const housingData = kasaData.find((housing) => housing.id === id) // Cherche le logement correspondant dans kasaData

    return (
        <div className='accommodation'>
            <Header />
            <div className="accommodation-details">
                <h1 className="accommodation-title">{housingData.title}</h1>
                <p className="accommodation-location">{housingData.location}</p>
                <p className="accommodation-description">{housingData.description}</p>
            </div>
            <Footer />
        </div>
    )
}