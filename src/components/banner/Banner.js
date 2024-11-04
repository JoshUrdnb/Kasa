import './banner.css'

function Banner({myBanner, bannerText}) {
	return (
		<div className='banner-container'>
			<img src={myBanner} alt='banniere' className='banner' />
			<p className='banner-text'>{bannerText}</p>
		</div>
	)
}

export default Banner