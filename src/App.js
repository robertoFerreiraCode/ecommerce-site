import styles from './App.module.scss';
import {useEffect, useState} from "react";
import {getProducts, updateProduct} from "./services/products"
import Home from './containers/Home';
import NavBar from './components/NavBar';
import ProductCardPage from './components/ProductCardPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './containers/Cart';

const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	const getData = async () => {
		const data = await getProducts();
		setProducts(data);
	}

	const onChange = async (updateRecord) => {
		const {id, ...record} = updateRecord;
		await updateProduct(id, record);
		getData();
	}

	const onAddToCheckout = (product) => {
		const currentCart = [...cart]
		currentCart.push(product);
		setCart(currentCart);
		console.log(cart);
	}

	useEffect(() => {
		getData();
	}, [])

	return (
		<div className={styles.App}>
			<Router>
				<NavBar />
				<Routes>
					<Route
                        path="/"
                        element={<Home products = {products} onChange={onChange}/>}
                    />
					<Route
                        path="/ProductCardPage/:productId"
                        element={<ProductCardPage onChange={onChange} onAddToCheckout={onAddToCheckout}/>}
                    />
					<Route
                        path="/Cart"
                        element={<Cart cart={cart} onChange={onChange} setCart={setCart}/>}
                    />
				</Routes>
			</Router>
		</div>
);
}

export default App;
