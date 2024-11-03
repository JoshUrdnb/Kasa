import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import { Link } from 'react-router-dom'

export default function About() {
	return (
		<div className='error'>
			<Header />
			<div className='error-container'>
				<h1>404</h1>
				<p>Oups! La page que vous demandez n'existe pas.</p>
				<Link to="/">Retourner sur la page d'accueil</Link>
			</div>
			<Footer />
		</div>
	)
}