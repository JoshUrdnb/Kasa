import './accommodation.css'
import { kasaData } from '../../datas/data'
import { useParams, Navigate } from 'react-router-dom'
import Carousel from '../../components/carousel/Carousel'
import Tags from '../../components/tags/Tags'
import Profile from '../../components/profile/Profile'
import Rating from '../../components/rating/Rating'
import Collapse from '../../components/collapse/Collapse'

export default function Accommodation() {
	const { id } = useParams() // Récupère l'ID du logement depuis l'URL
	const housingData = kasaData.find((housing) => housing.id === id) // Cherche le logement correspondant dans kasaData

	if (!housingData) {
		return <Navigate to="/404" replace />
	}

	return (
		<section className='accommodation'>

			<Carousel className="carousel" gallery={housingData} />

			<div className="accommodation-container">
				<div className="accommodation-infos">
					<div className="accommodation-details">
						<h1 className="accommodation-title">{housingData.title}</h1>
						<p className="accommodation-location">{housingData.location}</p>
					</div>

					<div className="tag-rating">
						<div className="tags-container">
							{housingData.tags.map((tag, index) => (
								<Tags key={index} tag={tag} />
							))}
						</div>
					</div>
				</div>

				<div className="accommodation-profile">
					<Profile className="profile" host={housingData.host} />
					<Rating className="rating" rate={housingData.rating} />
				</div>
			</div>

			<div className="collapses-container">
				<Collapse title="Description">
					{housingData.description}
				</Collapse>

				<Collapse title="Équipments">
					<ul className="collapse-style-list">
						{housingData.equipments.map((equipment, index) => (
							<li key={index}>{equipment}</li>
						))}
					</ul>
				</Collapse>
			</div>

		</section>
	)
}
