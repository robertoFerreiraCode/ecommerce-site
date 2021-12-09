import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ product }) => {
    return (
        <div className={styles.Product}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }}to={`/ProductCardPage/${product.id}`}>
                    <img className={styles.Product__img} src={product.imageUrl} />
                    <div className={styles.Product__info_container}>
                        <div>
                            <h3 className={styles.Product__name}>{product.name}</h3>
                            <p className={styles.Product__price}>${product.price}</p>
                        </div>
                        <div>
                            {product.favourite &&
                            <FontAwesomeIcon
                            icon={faStar}
                            className={styles.Product__fav}
                            size="lg"
                             />}
                            
                        </div>
                    </div>
            </Link>
        </div>
    )
}

export default Product;
