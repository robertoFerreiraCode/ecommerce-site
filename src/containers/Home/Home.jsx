import ProductGrid from "./../ProductGrid/";
import Carosel from "./../../components/Carosel"
import styles from "./Home.module.scss";
const Home = ({products}) => {
    return (
        <div>
            <Carosel products = {products}/> 
            <div className={styles.Home__Product_Grid_Container}>
                <ProductGrid 
                    products = {products}
                />
            </div>
            
        </div>
    )
}

export default Home
