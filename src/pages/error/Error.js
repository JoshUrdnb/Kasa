import { Link } from 'react-router-dom'
import './error.css'

export default function About() {
    return (
        <section className='error-container'>
                <h1 className='error-number'>404</h1>
                <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className='error-link'>Retourner sur la page d'accueil</Link>
        </section>
    )
}