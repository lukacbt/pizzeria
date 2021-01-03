import Layout from './components/Layout'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import About from './components/About'

const Home = () =>  {
  return (
    <Layout>
			<Hero />
      <Menu />
      <Gallery />
      <Reservation />
      <About />
      <Contact />
		</Layout>
	)
}

export default Home
