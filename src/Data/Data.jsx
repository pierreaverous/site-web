import React  from "react";
import surf from "../Assets/ImageActivité/surf.jpg";
import quad from "../Assets/ImageActivité/quad.jpg";
import plonger from "../Assets/ImageActivité/plongé.jpg";
import rando from "../Assets/ImageActivité/randoné.jpg";
import baladebateau from "../Assets/ImageActivité/baladeBateau.jpg";
import jetski from "../Assets/ImageActivité/jetski.jpeg";
import circuit1 from "../Assets/CircuitImage/circuit1.jpg"
import circuit2 from "../Assets/CircuitImage/circuit2.jpg"
import circuit3 from "../Assets/CircuitImage/circuit3.jpg"
import circuit4 from "../Assets/CircuitImage/circuit4.jpg"
import circuit5 from "../Assets/CircuitImage/circuit5.jpg"
import circuit6 from "../Assets/CircuitImage/circuit6.jpg"
import circuit7 from "../Assets/CircuitImage/circuit7.jpg"
import circuit8 from "../Assets/CircuitImage/circuit8.jpg"
import circuit9 from "../Assets/CircuitImage/circuit9.jpg"
import journéEntiere1 from "../Assets/ComboTerreMer/journé1.jpg"
import journéEntiere2 from "../Assets/ComboTerreMer/journé2.jpg"
import journéEntiere3 from "../Assets/ComboTerreMer/journé3.jpg"
import journéEntiere4 from "../Assets/ComboTerreMer/journé4.jpg"
import journéEntiere5 from "../Assets/ComboTerreMer/journé5.jpg"
import journéEntiere6 from "../Assets/ComboTerreMer/journé6.jpg"
import journéEntiere7 from "../Assets/ComboTerreMer/journrné7.jpg"
import journéEntiere8 from "../Assets/ComboTerreMer/journé8.jpg"
import dejeuner1 from "../Assets/DejeunerImages/repas1.jpg"
import dejeuner2 from "../Assets/DejeunerImages/repas2.jpg"
import dejeuner3 from "../Assets/DejeunerImages/repas3.jpg"
import dejeuner4 from "../Assets/DejeunerImages/repas4.jpg"
import quad1 from "../Assets/ComboTerreMer/quad1.jpg"
import quad2 from "../Assets/ComboTerreMer/quad2.jpg"
import quad3 from "../Assets/ComboTerreMer/quad3.jpeg"
import videoQuad from "../Assets/ComboTerreMer/videoQuad.mp4"

const datas = [
    { id: "Combo",
        img: journéEntiere1,
        pictures: [
          journéEntiere1,journéEntiere2,journéEntiere3,journéEntiere4,journéEntiere5,journéEntiere6,journéEntiere7,journéEntiere8
        ],
        title: "Combo terre-mer",
        descriptionTitle: "Combo Terre-mer journée entière:",
        nbPersonne: "4",
        duree: "7h00",
        description : "Explorez Tahaa par la terre et la mer durant cette excursion de 7h. \n" +
            "        Visitez l’île vanille dans un 4x4 ou mini-van, en découvrant une ferme perlière, une distillerie de rhum, ou encore une plantation de vanille.\n" +
            "    Plongez ensuite dans la beauté naturelle du lagon de Tahaa.\n" +
            "    Sous l’eau rapprochez-vous des requins à pointe noirs, et passez au-dessus du fameux jardin de corail.\n" +
            "    Savourez également un buffet polynésien sur un magnifique motu, un endroit unique pour vous relaxer et profiter de l’hospitalité locale.\n" +
            "    Vous en apprendrez plus sur la culture locale de vos guides tout au long de la journée.",
        video: [
            {id: "1", video: videoQuad, poster: quad2, description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",titre: "Titre video"},
            {id: "2", video: videoQuad, poster: quad2, description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",titre: "Titre video"},
            {id: "3", video: videoQuad, poster: quad2, description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",titre: "Titre video"},
        ],
    },
    { id:"Circuit",
        img: circuit7,
        title: "Circuit 4x4 ",
        descriptionTitle: "Circuit 4x4 demi-journée :",
        nbPersonne: "4",
        duree: "3h30",
        description :
            "Venez découvrir l’authenticité de l’île vanille dans un beau 4x4 durant 3h30 en visitant une distillerie de rhum local, une plantation de vanille naturelle, ainsi qu’une ferme perlière (Minimum de 4pax pour ouvrir une excursion) (Possible de le faire en privé)",
        pictures: [
            circuit1,circuit3,circuit4,circuit5,circuit6,circuit7,circuit8,circuit9
        ],
        video: [
            {id: "1", video: videoQuad, poster: quad2, description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",titre: "Titre video"},
            {id: "2", video: videoQuad, poster: quad2, description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",titre: "Titre video"},
            {id: "3", video: videoQuad, poster: quad2, description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",titre: "Titre video"},
        ],
    },
    {id: "dejeuner",
        img: dejeuner1,
        title: "Déjeuner & transfert motu",
        descriptionTitle: "Déjeuner & transfert motu :",
        nbPersonne: "2-4",
        duree: "3h30",
        description :
        "Venez passer une journée relaxante au motu Mahaea, un endroit idéal pour une journée en amoureux ou en famille\n" +
            "Vous pouvez également prendre la formule avec déjeuner local sur place",
        pictures: [
            dejeuner1,dejeuner2,dejeuner3,dejeuner4
        ],
        video: [
            {id: "1", video: videoQuad, poster: quad2, description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",titre: "Titre video"},
            {id: "2", video: videoQuad, poster: quad2, description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",titre: "Titre video"},
            {id: "3", video: videoQuad, poster: quad2, description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",titre: "Titre video"},
        ],
    },


]


export default datas
