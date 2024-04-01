/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Card.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
	const [showFullDescription, setShowFullDescription] = useState(false);

	let description = item.description;

	if (!showFullDescription) {
		description = description.slice(0, 90) + '...';
	}
	return (
		<div className={styles.card}>
			<img src={`${item.image}`} alt='' />
			<div className={styles.info}>
				<h1>{item.title}</h1>
				<p className={styles.description}>{description}</p>
				<button onClick={() => setShowFullDescription((prev) => !prev)}>
					{showFullDescription ? 'Less' : 'More'}
				</button>
				<div className={styles.button_block}>
					<p className={styles.price}>${item.price}</p>
					<Link to={`/cars-info/${item.id}`}>
						<button>
							Read More <FaArrowRightLong />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
