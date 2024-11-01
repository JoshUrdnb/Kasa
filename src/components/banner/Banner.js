import HomeBanner from '../../assets/Image-banner.png'
import './banner.css'

function Banner() {
	return (
		<div className='home-banner-1'>
			<img src={HomeBanner} alt='home banniere' className='home-banner' />
			<div className='banner-text'>Chez vous, partout et ailleurs</div>
		</div>
	)
}

export default Banner