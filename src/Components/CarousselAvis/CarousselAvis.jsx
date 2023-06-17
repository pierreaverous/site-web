import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarousselAvisStyle.scss'
import picture from "../../Assets/Images/Tripadvisor.png"

const reviews = [
    {
        id: 1,
        picture: picture,
        username: "John Doe",
        date: "12 juin 2023",
        rating: 5,
        comment: "Superbe expérience ! J'ai adoré chaque minute de notre visite."
    },
    {
        id: 2,
        picture: picture,
        username: "Jane Smith",
        date: "10 juin 2023",
        rating: 4,
        comment: "Vraiment amusant et instructif. Je recommande cette visite à tout le monde."
    },
    {
        id: 3,
        picture: picture,
        username: "John Doe",
        date: "12 juin 2023",
        rating: 5,
        comment: "Superbe expérience ! J'ai adoré chaque minute de notre visite."
    },
    {
        id: 4,
        picture: picture,
        username: "John Doe",
        date: "12 juin 2023",
        rating: 5,
        comment: "Superbe expérience ! J'ai adoré chaque minute de notre visite."
    },
    {
        id: 5,
        picture: picture,
        username: "John Doe",
        date: "12 juin 2023",
        rating: 5,
        comment: "Superbe expérience ! J'ai adoré chaque minute de notre visite."
    },
    {
        id: 6,
        picture: picture,
        username: "John Doe",
        date: "12 juin 2023",
        rating: 5,
        comment: "Superbe expérience ! J'ai adoré chaque minute de notre visite."
    },
    // Ajoutez autant d'objets d'avis que nécessaire
];
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

