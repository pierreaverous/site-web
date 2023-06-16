import React, { useState, useEffect } from 'react';
import "./ActivityDetailPagesStyles.scss"
import fetchById from "../../Data/api";
import { useParams, useLocation } from "react-router-dom";
import HeaderNavBar from "../../Components/HeaderNavBar/HeaderNavBar";
import Footer from "../../Components/Footer/Footer";
import CarousselBanner from "../../Components/Caroussel/CarrousselBanner";
import TitleActivity from "../../Components/TitleActivity/TitleActivity";
import DescritpionActivity from "../../Components/DescritpionActivity/DescritpionActivity";
import VideoActivity from "../../Components/VideoActivity/VideoActivity";

const ActivityDetailPage = () => {
    const [dataActivityId, setActivityId] = useState(null);
    const result = useParams();
    const location = useLocation();

    const loadActivityId = async () => {
        const dataActivity = await fetchById(result.id);
        setActivityId(dataActivity);
    };

    useEffect(() => {
        loadActivityId();
        window.scrollTo(0, 0); // Faire défiler vers le haut lorsque le composant se monte
    }, [result.id]);

    useEffect(() => {
        const scrollElement = document.getElementById("activityPage");
        if (scrollElement && location.hash) {
            scrollElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [location.hash]);

    return (
        <>
            {dataActivityId != null && (
                <>
                    <HeaderNavBar />
                    <div id="activityPage">
                        <TitleActivity dataActivityId={dataActivityId} />
                        <CarousselBanner dataActivityId={dataActivityId} />
                        <DescritpionActivity dataActivityId={dataActivityId} />
                        <div className='containerActivityVideo'>
                            <h2 className='titleVideo'>Découvrez nos vidéos de l'activité :</h2>
                            <div className='container-video'>
                                {dataActivityId.video.map(d => <VideoActivity dataActivityId={d} />)}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default ActivityDetailPage;
