import React from "react";
import "./DescritpionActivityStyles.scss"
import iconPersonne from "../../Assets/Icon/icons-homme.png"
import iconTime from "../../Assets/Icon/icons-time.png"

const DescritpionActivity = ({dataActivityId}) => {
    return(
        <>
            <div className='containerDescriptionActivity'>
                <h2 className="titleDescription"> Description de l'Activité {dataActivityId.descriptionTitle}</h2>
                <p id="description">{dataActivityId.description}</p>
                <div>
                    <ul>
                        <li className='container-iconParagraphe'>
                            <img className='icon' src={iconPersonne}/>
                            <p> Nombre minimum de personnes : {dataActivityId.nbPersonne}</p>
                        </li>
                        <li className='container-iconParagraphe'>
                            <img className='icon' src={iconTime}/>
                            <p> Durée de l'activité : {dataActivityId.duree}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DescritpionActivity