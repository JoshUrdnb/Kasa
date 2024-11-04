import Header from '../../layout/header/Header'
import Banner from '../../components/banner/Banner'
import AboutBanner from '../../assets/image-banner-about.png'
import Collapse from '../../components/collapse/Collapse'
import Footer from '../../layout/footer/Footer'

export default function About() {
	return (
		<div className='about'>
			<Header />
			<Banner myBanner={AboutBanner} />
			<div className='collapse-container'>
				<div className="collapses">
					<Collapse title="Fiabilité" content="Description." />
					<Collapse title="Respect" content="Description." />
					<Collapse title="Service" content="Description." />
					<Collapse title="Sécurité" content="Description." />
				</div>
			</div>
			<Footer />
		</div>
	)
}