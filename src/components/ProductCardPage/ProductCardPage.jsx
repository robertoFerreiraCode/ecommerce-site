import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "./../../services/products";
import styles from "./ProductCardPage.module.scss";


const ProductCardPage = ({ onChange, onAddToCheckout }) => {
    let params = useParams();
    const [product, setProduct] = useState({});
    
    const handleSetFav = () => {
        onChange({
            ...product, 
            favourite: !product.favourite
        })
    }

    const handleCheckout = () => {
        onAddToCheckout(product);
    }

    const setSelectedProduct = async (productId) => {
        const selectedProduct = await getProduct(productId);
        setProduct(selectedProduct);
    } 
    
    useEffect(() => {
        setSelectedProduct(params.productId);
    }, []);

    return (
        <div className={styles.ProductCardPage}>
            <div className={styles.img_div}>
                <img src={product.imageUrl} className={styles.ProductCardPage__img} alt={`Image of ${product.name}`}  />
            </div>
            <div className={styles.info_div}>
                <h3>{product.name}</h3>
                <p className={styles.info_div__price}>${product.price}</p>
                <p>Items Left: {product.quantity}</p>
                <div>
                    <button className={styles.info_div__btn} onClick={handleSetFav}>Favourite</button>
                    <button className={styles.info_div__btn} onClick={handleCheckout}>Add To Cart</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default ProductCardPage;
