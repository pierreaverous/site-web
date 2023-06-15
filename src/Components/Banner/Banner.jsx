import React from "react";
import "./BannerStyles.scss"
import bannerImg from "../../Assets/Images/wallpaperbetter.com_4096x2304.jpg"

const Banner = () => {
    return(
        <>
            <div className='backgroundImage'>
                <img  className="BannerImg" src={bannerImg} alt={'image'}/>
            </div>

        </>
    )
}

export default Banner