import Card from '../components/card/Card';

const Home = () => {
	return (
		<>
			<section className='hero'>
				<h1>React Practica</h1>
			</section>
			<Card isHome={true} />
		</>
	);
};

export default Home;
