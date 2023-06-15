import datas from "./Data";
import React from "react";

const fetchById = async (id) => {

    const accommodation = datas.find(accommodation => id === accommodation.id)
    // if (!accommodation) {
    //     console.log(`Aucun élément trouvé avec l'id ${id}`);
    // } else {
    //     console.log(accommodation);
    // }
    return accommodation
}


export  default fetchById