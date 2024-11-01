import Header from '../../layout/header/Header'
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'
import Footer from '../../layout/footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<Card />
			<Footer />
		</div>
	)
}