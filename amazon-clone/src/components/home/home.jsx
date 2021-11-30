import React, {useState} from 'react'
import './home.scss'
import Product from './product/product'
import productFile from '../../jses/productFile'
import images from '../../jses/carouselImages'
import left from '../../assets/left-arrow.png'
import right from '../../assets/right-arrow.png'


const Home = () => {
    const [counter, setCounter] = useState(0);

    const handleLeft = () => {
        if(counter===0){
            setCounter(images.length-1)
        }else{
            setCounter(counter-1);
        }
    }
    const handleRight = () => {
        if(counter=== images.length-1){
            setCounter(0)
        }else{
            setCounter(counter+1)
        }
    }

    const firstRow = productFile.slice(0,2).map((productF) => {
        return <Product id={productF.id} title={productF.title} price={productF.price} rating={productF.rating} image={productF.image}/>
    })
    const secondRow = productFile.slice(2,5).map((productF) => {
        return <Product id={productF.id} title={productF.title} price={productF.price} rating={productF.rating} image={productF.image}/>
    })
    const thirdRow = productFile.slice(5,6).map((productF) => {
        return <Product id={productF.id} title={productF.title} price={productF.price} rating={productF.rating} image={productF.image}/>
    })
    

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__container-carousel">
                    <img className="home__container-carousel-left" onClick={handleLeft} src={left} alt="" />
                    <img className="home__container-carousel-center" src={images[counter].url} alt="" />
                    <img className="home__container-carousel-right" onClick={handleRight} src={right} alt="" />
                </div>
                <div className="home__container-row">
                    {firstRow}
                </div>
                <div className="home__container-row">
                    {secondRow}
                </div>
                <div className="home__container-row">
                    {thirdRow}
                </div>
            </div>
        </div>
    )
}

export default Home
