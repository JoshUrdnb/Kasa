import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import { Link } from 'react-router-dom'
import './error.css'

export default function About() {
    return (
        <div className='error'>
            <Header />
            <div className='error-container'>
                <h1 className='error-number'>404</h1>
                <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className='error-link'>Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}