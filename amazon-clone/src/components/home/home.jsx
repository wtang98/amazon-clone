import React from 'react'
import './home.scss'
import Product from './product/product'
import productFile from '../../jses/productFile'

const Home = () => {

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
                <img className="home__container-image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
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
