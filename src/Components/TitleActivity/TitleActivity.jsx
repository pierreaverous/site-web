import React from "react";
import './TitleActvityStyles.scss'


const titleActivity = ({dataActivityId}) => {
    // console.log(dataActivityId.id)
    // if (!dataActivityId || !dataActivityId.title) {
    //     return <div>No data found</div>;
    // }
    return (
        <>
            <div className='titleActivity'>
                <h1> Terainui Tours vous présente l'activité {dataActivityId.title}</h1>
            </div>

        </>

    )



}

export default titleActivity