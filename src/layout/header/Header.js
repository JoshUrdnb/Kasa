import logo from '../../assets/logo.png'
import './header.css'

function Header() {
	return (
		<div className='kasa-banner'>
			<img src={logo} alt='Kasa, le site immobilier' className='kasa-logo' />
			<div className='banner-links'>
				<a href="index.js">Accueil</a>
				<a href="index.js">À Propos</a>
			</div>
		</div>
	)
}

export default Header