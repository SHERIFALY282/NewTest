import React from 'react'
import styles from './Home.module.css'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts.jsx'
import CategorySlider from '../CategorySlider/CategorySlider.jsx'
import MainSlider from '../MainSlider/MainSlider.jsx'
import { Helmet } from 'react-helmet'
import BrandSlider from '../BrandSlider/BrandSlider.jsx'

export default function Home() {

    return <>
        <Helmet>
            <title>Fresh Cart</title>
        </Helmet>
        <div className='container pb-5'>
            <MainSlider />
            
            <FeaturedProducts />
            
        </div>
    </>
}
