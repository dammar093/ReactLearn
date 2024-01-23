import React, { useState } from 'react'
import './Slider.scss'
import WestOutline from '@mui/icons-material/WestOutlined'
import EastOutlined from '@mui/icons-material/EastOutlined'
import WestOutlined from '@mui/icons-material/WestOutlined'
const Slider = () => {
const [currentSlide,setCurrentSlide] = useState(0)

  const sliderImage=[
    'https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3854884/pexels-photo-3854884.jpeg?auto=compress&cs=tinysrgb&w=600'
  ]  
  const prevSlide = () =>{
    setCurrentSlide(currentSlide == 0 ? sliderImage.length-1 : (prev) => prev - 1)
  }
  const nextSlide = () =>{
    
    setCurrentSlide(currentSlide == sliderImage.length-1 ? 0 :( prev) => prev + 1)
  }

  return (
    <div className='slider'>
       <div className="container" style={{transform:`translateX(${-currentSlide *100}vw)`}} >
         <img src={sliderImage[currentSlide]} alt="" />
         <img src={sliderImage[currentSlide]} alt="" />
         <img src={sliderImage[currentSlide]} alt="" />
       </div>

       <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined/>
        </div>
       </div>
    </div>
  )
}

export default Slider