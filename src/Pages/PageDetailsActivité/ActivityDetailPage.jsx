
import React, { useState, useEffect} from 'react';
import "./ActivityDetailPagesStyles.scss"
import fetchById from "../../Data/api";
import {useParams} from "react-router-dom";
import HeaderNavBar from "../../Components/HeaderNavBar/HeaderNavBar";
import Footer from "../../Components/Footer/Footer";
import CarousselBanner from "../../Components/Caroussel/CarrousselBanner";
import TitleActivity from "../../Components/TitleActivity/TitleActivity";
import DescritpionActivity from "../../Components/DescritpionActivity/DescritpionActivity";
import VideoActivity from "../../Components/VideoActivity/VideoActivity";


const ActivityDetailPage = () => {
    const [dataActivityId, setActivityId] = useState(null)
    const result = useParams();
    const loadActivityId = async () => {
        // console.log(fetchById())
        const dataActivity = await fetchById(result.id)
        setActivityId(dataActivity)

    }
    useEffect(()=>{
        loadActivityId()

    },[result.id])


    return(
        <>
            {dataActivityId != null && (
                <>
                    <HeaderNavBar/>
                    <TitleActivity dataActivityId={dataActivityId}/>
                    <CarousselBanner dataActivityId={dataActivityId}/>
                    <DescritpionActivity dataActivityId={dataActivityId}/>
                    <div className='containerActivityVideo'>
                        <h2 className='titleVideo'>Découvrez nos video de l'activité : </h2>
                        <div className='container-video'>
                            {dataActivityId.video.map(d => <VideoActivity dataActivityId={d}/>)}
                        </div>
                    </div>

                    <Footer/>
                </>
            )}



        </>

    )
}

export default ActivityDetailPage