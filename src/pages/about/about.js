import Header from '../../layout/header/Header'
import Banner from '../../components/banner/Banner'
import AboutBanner from '../../assets/image-banner-about.png'
import Footer from '../../layout/footer/Footer'

export default function About() {
	return (
		<div className='about'>
			<Header />
			<Banner myBanner={AboutBanner}/>
			<Footer />
		</div>
	)
}