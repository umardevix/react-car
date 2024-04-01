import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';
import styles from './Header.module.css';
const Header = () => {
	return (
		<header className={styles.header}>
			<Link to='/'>
				<div className={styles.logo}>
					<img src='/public/logo.png' alt='' />
					<h1>React Practic</h1>
				</div>
			</Link>
			<NavLink />
		</header>
	);
};

export default Header;
