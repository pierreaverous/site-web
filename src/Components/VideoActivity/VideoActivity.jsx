
import React from "react";
import "./VideoActivity.scss"



const VideoActivity = ({dataActivityId}) => {
    return(
        <>

            <div className='cardVideo'>
                <video className='video'controls  poster={dataActivityId.poster}>
                    <source src={dataActivityId.video} type="video/mp4"/>
                </video>
            </div>

        </>

    )

};

export default VideoActivity