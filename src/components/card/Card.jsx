/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styles from './Card.module.css';
import CardItem from './CardItem';
import axios from 'axios';

const Card = ({ isHome = false }) => {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		const getCars = async () => {
			const apiUrl = isHome ? '/api/cars?_limit=4' : '/api/cars';
			try {
				const res = await axios.get(apiUrl);
				setCars(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getCars();
	}, []);
	return (
		<div className={styles.card_block}>
			{cars.map((item) => (
				<CardItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default Card;
