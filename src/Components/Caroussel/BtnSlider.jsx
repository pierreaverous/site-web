import React from 'react'
import "./Caroussel.scss"
import leftArrow from '../../Assets/Images/right-arrow.png'
import rightArrow from '../../Assets/Images/left-arrow.png'


export default function BtnSlider({direction, moveSlide}){
    return(
        <button
            onClick={moveSlide}
            className={direction === "next" ? 'btn-slide next' : "btn-slide prev"}>
            <img src={direction ==="next"? rightArrow : leftArrow} alt=''/>
        </button>
    )


}
