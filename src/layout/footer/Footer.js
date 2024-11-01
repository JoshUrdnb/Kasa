import FooterLogo from '../../assets/footer-logo.png'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <img src={FooterLogo} alt='logo du footer' className='footer-logo' />
                <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer