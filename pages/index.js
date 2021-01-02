import Layout from './components/Layout'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'

const Home = () =>  {
  return (
    <Layout>
			<Hero />
      <Menu />
      <Gallery />
      <Reservation />
		</Layout>
	)
}

export default Home
