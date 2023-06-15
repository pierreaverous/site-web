import React, {useState} from "react";
import "./Caroussel.scss"
import BtnSlider from "./BtnSlider";


const CarousselBanner = ({dataActivityId}) => {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if(slideIndex !== dataActivityId.pictures.length){
            setSlideIndex(slideIndex +1)
        } else if (slideIndex === dataActivityId.pictures.length){
            setSlideIndex(1)

        }

    }
    const prevSlide = () => {
        if(slideIndex !== 1 ){
            setSlideIndex(slideIndex -1)

        } else if(slideIndex === 1 ){
            setSlideIndex(dataActivityId.pictures.length)
        }

    }
    return(
        <>
        <div className='container-slider'>
            {dataActivityId.pictures.map((picture, index) => {
                return (
                    <div className={slideIndex === index +1 ? "slide active-anim" : "slide"}>


                        <img  src={picture} alt="photo"/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
        <div className="slider-dots">
            {dataActivityId.pictures.map((_, index) => (
                <div
                    key={index}
                    className={`slider-dot ${index + 1 === slideIndex ? "active" : ""}`}
                    onClick={() => setSlideIndex(index + 1)}
                />
            ))}
        </div>
        </>
    )

}



export default  CarousselBanner