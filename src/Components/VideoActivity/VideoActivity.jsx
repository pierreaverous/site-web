
import React from "react";
import "./VideoActivity.scss"



const VideoActivity = ({dataActivityId}) => {
    return(
        <>

            <div className='cardVideo'>
                <video className='video'controls  poster={dataActivityId.poster}>
                    <source src={dataActivityId.video} type="video/mp4"/>
                </video>
                <h2 className='titreVideo'>{dataActivityId.titre}</h2>
                <p className='videoDescription'>{dataActivityId.description}</p>

            </div>

        </>

    )

};

export default VideoActivity