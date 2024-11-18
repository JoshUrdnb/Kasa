import { kasaData } from '../../datas/data'
import Banner from '../../components/banner/Banner'
import HomeBanner from '../../assets/Image-banner.png'
import Cards from '../../components/cards/Cards'

export default function Home() {
	return (
		<div className='home'>
			<Banner myBanner={HomeBanner} bannerText="Chez vous, partout et ailleurs" />
			<Cards housings={kasaData} /> {/* Je passe kasaData comme prop à Cards en tant que housings*/}
		</div>
	)
}
