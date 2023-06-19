import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarousselAvisStyle.scss'
import picture from "../../Assets/Images/Tripadvisor.png"

const reviews =[
    {
        id: 1,
        picture: picture,
        username: "John",
        date: "12 juin 2023",
        rating: 5,
        comment: "Superbe expérience ! J'ai adoré chaque minute de notre visite."
    },
    {
        id: 2,
        picture: picture,
        username: "Jane",
        date: "10 juin 2023",
        rating: 5,
        comment: "Très agréable et enrichissant. Je recommanderais cette visite à tout le monde."
    },
    {
        id: 3,
        picture: picture,
        username: "Jerome",
        date: "5 juin 2023",
        rating: 5,
        comment: "J'ai vraiment apprécié ce tour, les guides étaient très sympathiques et bien informés."
    },
    {
        id: 4,
        picture: picture,
        username: "Olivia",
        date: "8 juin 2023",
        rating: 5,
        comment: "Expérience incroyable. Je ne peux pas attendre pour revenir."
    },
    {
        id: 5,
        picture: picture,
        username: "David",
        date: "15 juin 2023",
        rating: 5,
        comment: "C'est un must lors de la visite de la ville. Très divertissant et informatif."
    },
    {
        id: 6,
        picture: picture,
        username: "Pierre",
        date: "18 juin 2023",
        rating: 5,
        comment: "Absolument adoré. Une expérience inoubliable."
    }
]

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}
function ReviewCard({ review }) {
    return (
        <div className='cardAvis'>
            <div className='cardtitleLogo'>
                <img className='imgLogo' src={review.picture}/>
                <h3>{review.username}</h3>
            </div>
            <p className='comment'>{review.comment}</p>
            <div className='cardtitleLogoFooter'>
                <p>{'⭐'.repeat(review.rating)}</p>
                <p>{review.date}</p>
            </div>

        </div>
    );
}

export default function ReviewCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </Slider>
    );
}

