import { kasaData } from '../../datas/data'
import Header from '../../layout/header/Header'
import Banner from '../../components/banner/Banner'
import HomeBanner from '../../assets/Image-banner.png'
import Cards from '../../components/cards/Cards'
import Footer from '../../layout/footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner myBanner={HomeBanner} bannerText="Chez vous, partout et ailleurs" />
			<Cards housings={kasaData} /> {/* Je passe kasaData comme prop à Cards en tant que housings*/}
			<Footer />
		</div>
	)
}