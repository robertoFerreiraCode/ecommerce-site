import styles from "./CartItem.module.scss";
import { useState } from "react";

const CartItem = ({ product, numAdded }) => {
    const [quantity, setQuantity] = useState();

    return (
        <div className={styles.CartItem}>
            <img src={product.imageUrl} alt={product.name} className={styles.CartItem__img}/>
            <p>{product.name}</p>
            <p>Quantity: {numAdded}</p>
            <p>${product.price * numAdded}</p>
        </div>
        
    )
}

export default CartItem
