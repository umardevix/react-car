/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const CarsInfoPage = ({ onDeleteCars }) => {
	const [carsInfo, setCarsInfo] = useState({});

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const getInfo = async () => {
			try {
				const res = await axios.get(`/api/cars/${id}`);
				setCarsInfo(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getInfo();
	}, []);

	const deleteCars = (carsId) => {
		const confirm = window.confirm('Are you sure want to delete this listing?');

		if (!confirm) return;

		toast.success('Cars deleted successfull');
		onDeleteCars(carsId);
		navigate('/cars');
	};

	return (
		<div className='cars'>
			<img src={`${carsInfo.image}`} alt='' />
			<div className='cars-info'>
				<h1>{carsInfo.title}</h1>
				<p className='description'>{carsInfo.description}</p>
				<p className='price'>${carsInfo.price}</p>
				<button onClick={() => deleteCars(carsInfo.id)}>
					Remove <FaTrash />
				</button>
			</div>
		</div>
	);
};

export default CarsInfoPage;
