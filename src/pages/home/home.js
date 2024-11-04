import { kasaData } from '../../datas/data'
import Header from '../../layout/header/Header'
import Banner from '../../components/banner/Banner'
import HomeBanner from '../../assets/Image-banner.png'
import Card from '../../components/card/Card'
import Footer from '../../layout/footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner myBanner={HomeBanner} bannerText="Chez vous, partout et ailleurs" />
			<Card housings={kasaData} /> {/* Je passe kasaData comme prop à Card en tant que housings*/}
			<Footer />
		</div>
	)
}