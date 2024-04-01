import { Link } from 'react-router-dom';
import styles from './NavLink.module.css';
const NavLink = () => {
	return (
		<nav className={styles.nav}>
			<Link to='/'>Home</Link>
			<Link to='/cars'>Cars</Link>
			<Link to='/add-car'>Add Car</Link>
		</nav>
	);
};

export default NavLink;
