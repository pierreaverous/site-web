import React from "react";
import "./DescriptionHomePageStyles.scss"



const DescriptionHomePage = () => {
    return(
        <>
            <div className='container-descriptionHomePage'>
                <h2 className='title-homepage'> TERAINUI TOURS </h2>
                <div id="barre_fixe">
                    <p></p>
                </div>
                <p className='text-description'>
                    Fondée en 2007, Terainui Tours propose des excursions terrestres et nautiques sur l’île de Tahaa. Plusieurs formules de tour vous sont proposées (journées complètes, demie-journées, déjeuner sur le motu Mahaea, tour sur mesure...)
                    Avec plus de 15 ans d’expérience, Morou Eric le gérant et toute son équipe, aurons le plaisir de vous faire découvrir leur belle île, aussi appelée l’île vanille, ainsi que son lagon au eaux turquoises
                </p>
            </div>
        </>
    )
}

export default DescriptionHomePage