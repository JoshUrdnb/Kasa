import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'

function Header() {

	const location = useLocation()

	return (
		<div className='kasa-banner'>
			<Link to="/"><img src={logo} alt='Kasa, le site immobilier' className='kasa-logo' /></Link>
			<div className='nav-links'>
				<Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Accueil</Link>
				<Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>À Propos</Link>
			</div>
		</div>
	)
}

export default Header