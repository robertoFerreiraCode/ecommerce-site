import { useState } from "react";
import { Link } from "react-router-dom";
import styles  from "./Carosel.module.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
const Carosel = ({ products }) => {
    const [current, setCurrent] = useState(0);
    const length = products.length;
    
    const handleNextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const handlePrevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const displaySlides = (index) => {
        const relativeSlides = [];
        (current - 1 < 0) 
            ? relativeSlides.push(length-1) 
            : relativeSlides.push(current - 1);
        relativeSlides.push(current);
        (current + 1 > length) 
            ? relativeSlides.push(0) 
            : relativeSlides.push(current + 1);  
        return relativeSlides.includes(index);
    }

    return (
        <div>
            <h2 className={styles.Carosel__title}>Featured Products</h2>
            <div className={styles.Carosel}>
                <FaArrowAltCircleLeft 
                    className={[styles.Carosel__arrow, styles.Carosel__arrow_left].join(' ')} onClick={handlePrevSlide} />
                <FaArrowAltCircleRight 
                    className={[styles.Carosel__arrow, styles.Carosel__arrow_right].join(' ')} 
                    onClick={handleNextSlide} />
                {products.map((product, index) => {
                    return (
                        <div>
                            {displaySlides(index) && 
                                <Link style={{ color: 'inherit', textDecoration: 'inherit' }}to={`/ProductCardPage/${product.id}`}>
                                    <img 
                                    src={product.imageUrl} 
                                    alt={product.name} 
                                    className={styles.Carosel__img}/>
                                </Link>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carosel
