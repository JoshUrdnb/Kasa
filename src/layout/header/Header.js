import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'

function Header() {
	return (
		<div className='kasa-banner'>
			<Link to="/"><img src={logo} alt='Kasa, le site immobilier' className='kasa-logo' /></Link>
			<div className='nav-links'>
				<Link to="/">Accueil</Link>
				<Link to="/about">À Propos</Link>
			</div>
		</div>
	)
}

export default Header