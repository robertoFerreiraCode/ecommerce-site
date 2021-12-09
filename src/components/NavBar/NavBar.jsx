import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }}to={`/`}>
                <h1 className={styles.NavBar__title}>Rob's Wares</h1>
            </Link>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }}to={`/Cart`}>
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    className={styles.NavBar__cart_btn}
                    size="lg"
                />
            </Link>
        </div>
    )
}

export default NavBar
