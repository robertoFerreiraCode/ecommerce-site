import Product from "../../components/Product"
import styles from './ProductGrid.module.scss';

const ProductGrid = ({products}) => {
    return (
        <div className={styles.ProductGrid}>
            {products.map((product) => {
				return <Product 
					key = {product.id}
					product = {product}
				/>
			})}
        </div>
    )
}

export default ProductGrid
