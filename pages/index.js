import Layout from './components/Layout'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Gallery from './components/Gallery'

const Home = () =>  {
  return (
    <Layout>
			<Hero />
      <Menu />
      <Gallery />
		</Layout>
	)
}

export default Home
