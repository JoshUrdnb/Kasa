import Banner from '../../components/banner/Banner'
import AboutBanner from '../../assets/image-banner-about.png'
import Collapse from '../../components/collapse/Collapse'

export default function About() {
	return (
		<div className='about'>
			<Banner myBanner={AboutBanner} />
			<section className='collapse-container'>
				<div className="collapses">
					<Collapse title="Fiabilité">
						Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
					</Collapse>

					<Collapse title="Respect">
						La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
					</Collapse>

					<Collapse title="Service">
						La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
					</Collapse>

					<Collapse title="Sécurité">
						La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
					</Collapse>
				</div>
			</section>
		</div>
	)
}