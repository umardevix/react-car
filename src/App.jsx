import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import CarsPage from './pages/CarsPage';
import AddCarPage from './pages/AddCarPage';
import CarsInfoPage from './pages/CarsInfoPage';
import axios from 'axios';

function App() {
	const addCar = async (newCar) => {
		await axios.post('/api/cars', newCar);
	};

	const deletedCars = async (carsId) => {
		await axios.delete(`/api/cars/${carsId}`);
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/cars' element={<CarsPage />} />
				<Route path='/add-car' element={<AddCarPage onAddCar={addCar} />} />
				<Route path='/cars-info/:id' element={<CarsInfoPage onDeleteCars={deletedCars} />} />
			</Route>,
		),
	);
	return <RouterProvider router={router} />;
}

export default App;
