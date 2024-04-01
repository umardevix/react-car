/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddCarPage = ({ onAddCar }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');

	const navigate = useNavigate();

	const onSubmitForm = (e) => {
		e.preventDefault();
		const newCar = {
			title,
			description,
			price,
			image,
		};
		onAddCar(newCar);
		toast.success('Job Added Successfly');
		navigate('/cars');
	};

	return (
		<form onSubmit={onSubmitForm}>
			<h1>Add Car</h1>
			<div>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type='text'
					placeholder='Name...'
				/>

				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder='description'
				></textarea>
				<input
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					type='number'
					placeholder='price...'
				/>
				<input
					value={image}
					onChange={(e) => setImage(e.target.value)}
					type='text'
					placeholder='image_link...'
				/>
				<button type='submit'>Add Car</button>
			</div>
		</form>
	);
};

export default AddCarPage;
