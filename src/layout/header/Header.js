import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.scss'

function Header() {

	const location = useLocation()

	return (
		<header className='kasa-header'>
			<Link to="/"><img src={logo} alt='Kasa, le site immobilier' className='kasa-logo' /></Link>
			<nav className='nav-links'>
				<Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Accueil</Link>
				<Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>À Propos</Link>
			</nav>
		</header>
	)
}

export default Header