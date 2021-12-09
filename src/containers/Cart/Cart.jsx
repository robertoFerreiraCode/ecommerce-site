import styles from "./Cart.module.scss";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";

const Cart = ({cart, onChange, setCart}) => {
    const [calculatedCart, setCalculatedCart] = useState(cart);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        calculateQuantities();
    }, [])

    useEffect(() => {
        updateCart()
    }, [quantities])

    const calculateQuantities = () => {
        const calculatedQuantities = {};
        cart.forEach((product) => {
            (Object.keys(calculatedQuantities).includes(product.id)) 
                ? calculatedQuantities[product.id]++ 
                : calculatedQuantities[product.id] = 1;
        });
        setQuantities(calculatedQuantities);
    };

    const calculateTotalCost = () => {
        let cost = 0;
        return calculatedCart.reduce((acc, product) => {
            const quantity = quantities[product.id];
            return acc + (product.price * quantity); 
        }, 0); 
    }

    const updateCart = () => {
        const updatedCart = Object.keys(quantities).map(productId => {
            return cart.find(product => {
                return product.id === productId})
        })
        setCalculatedCart(updatedCart);
    }

    const handlePurchase = () => {
        calculatedCart.forEach(product => {
            onChange({
                ...product, 
                quantity: product.quantity-1
            });
        })
        setCalculatedCart([]);
        setQuantities({});
        setCart([]);
    }

    return (
        <div className={styles.Cart}>
            <h1>Checkout</h1>
            
                <div className={styles.Cart__itemList}>
                    {calculatedCart.map((product, index) => {
                        return <CartItem product={product} numAdded={quantities[product.id]} key={index} />
                    })}
                </div>
                {calculatedCart.length > 0 &&  
                    <div className={styles.Cart__totalCost}>
                        <p>Total Cost: <span className={styles.Cart__totalCost__price}>${calculateTotalCost()}</span></p>
                        <button className={styles.Cart__purchaseBtn} onClick={handlePurchase}>Purchase</button>
                    </div>
                }
                {calculatedCart.length === 0 && 
                    <div className={styles.Cart__error_msg}>
                        <p>Add some items to Cart to Checkout...</p>
                    </div>
                }
        </div>      
    )
}

export default Cart;
