import React, {useState} from "react";
import "./Carousel.css"
import carousel1 from './img/carousel1.svg'
import carousel2 from './img/carousel2.svg'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/all";

const carouselList = [
    {
        id: 0,
        img: carousel2,
        text: "Люба Сорока: «Я мала щастя бачити людей ...»"
    },
    {
        id: 1,
        img: carousel1,
        text: "Володимир Станчишин: «Кожне сьогодні мало своє вчора»..."
    }

]

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = carouselList.length

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }

    return(
        <div className="carousel">
            <h1 className="carousel-title">Вибір редакції:</h1>
                <FaArrowAltCircleRight onClick={nextSlide} className="arrow-right"/>
            {
                carouselList.map(e => {
                    return(
                        <>
                            <div key={e.id} className={currentSlide === e.id ? "carousel-item-active" : "carousel-item"}>
                                {
                                    e.id === currentSlide &&
                                    <>
                                        <img className="carousel-img" src={e.img} alt={`carousel${e.id}`}/>
                                        <p className="carousel-text">{e.text}</p>
                                    </>
                                }
                            </div>
                        </>
                    )
                })
            }
            <FaArrowAltCircleLeft onClick={prevSlide} className='arrow-left'/>
        </div>
    )
}

export default Carousel