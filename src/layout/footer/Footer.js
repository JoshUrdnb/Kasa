import FooterLogo from '../../assets/footer-logo.png'
import './footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <img src={FooterLogo} alt='logo du footer' className='footer-logo' />
                <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer