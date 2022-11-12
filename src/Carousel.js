import React, {useEffect} from 'react';
import {useState} from "react";
import './Carousel.css'
import CarouselBtn from "./CarouselBtn";
import CarouselDotsAndPlay from "./CarouselDotsAndPlay";
import CarouselImage from "./CarouselImage";
import {clear} from "@testing-library/user-event/dist/clear";

function Carousel({arrImgs}) {

    const [isPlay, setIsPlay] = useState(true)
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const carouselInterval = setInterval(() => {
            console.log('interval')
            setCurrent(current => current < arrImgs.length - 1 ? current + 1 : 0)
        }, 2000)
        return () =>
            clearInterval(carouselInterval)
    }, [])
    const handlePlay = () => {
        setIsPlay(!isPlay)
    }

    const handlePause = () => {
        setIsPlay(!isPlay)
    }
    const prevBtn = () => {
        setCurrent(current === 0 ? arrImgs.length - 1 : current - 1)
    }
    console.log(current)
    const nextBtn = () => {
        setCurrent(current === arrImgs.length - 1 ? 0 : current + 1)
    }

    const handleDot = (index) => {
        setCurrent(index)
    }

    return (
        <div className='carousel'>
            <CarouselImage arrImgs={arrImgs} current={current}/>
            <CarouselBtn prevBtn={prevBtn} nextBtn={nextBtn}/>
            <CarouselDotsAndPlay arrImgs={arrImgs} current={current} isPlay={isPlay} handlePlay={handlePlay}
                                 handlePause={handlePause} handleDot={handleDot}/>
        </div>

    );
}

export default Carousel;