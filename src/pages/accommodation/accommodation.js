import './accommodation.css'
import { useParams } from 'react-router-dom' // Pour accéder aux paramètres d'URL
import { kasaData } from '../../datas/data' // Importe les données de logements
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import Carousel from '../../components/carousel/Carousel'
import Tags from '../../components/tags/Tags'
import Profile from '../../components/profile/Profile'
import Rating from '../../components/rating/Rating'
import Collapse from '../../components/collapse/Collapse'

export default function Accommodation() {
	const { id } = useParams() // Récupère l'ID du logement depuis l'URL
	const housingData = kasaData.find((housing) => housing.id === id) // Cherche le logement correspondant dans kasaData

	return (
		<div className='accommodation-main'>

			<Header />

			<div className='accommodation'>

				<div className="gallery-accommodation-container">
					<Carousel gallery={housingData} />
				</div>

				<div className="accommodation-container">
					<div className="accommodation-details">
						<h1 className="accommodation-title">{housingData.title}</h1>
						<p className="accommodation-location">{housingData.location}</p>
					</div>

					<div className="tags-container">
						{housingData.tags.map((tag, index) =>
							<Tags key={index} tag={tag} />
						)}
					</div>

					<div className="profile-container">
						<Profile host={housingData.host} />
					</div>

					<div className="rating-container">
						<Rating rate={housingData.rating} />
					</div>

					<div className="collapses-container">

						<Collapse title="Description">
							{housingData.description}
						</Collapse>

						<Collapse title="Équipments" content={
							<ul className="collapse-style-list" >
								{housingData.equipments.map((equipment, index) => (
									<li key={index}>{equipment}</li>
								))}
							</ul>
						} />
					</div>
				</div>
			</div>

			<Footer />

		</div>
	)
}