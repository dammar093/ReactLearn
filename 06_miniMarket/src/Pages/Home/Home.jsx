import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
        {/* <Slider/> */}
        <FeatureProduct type="featured"/>
        <FeatureProduct type = "trending"/>
    </div>
  )
}

export default Home