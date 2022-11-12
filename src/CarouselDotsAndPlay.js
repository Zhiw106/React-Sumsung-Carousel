import React from 'react';
import './CarouselDotsAndPlay.css'

function CarouselDotsAndPlay({arrImgs,current,isPlay,handlePlay,handlePause,handleDot}) {
    return (
        <div className='imgCtrl'>
            <div className='imgDots'>
                {arrImgs.map((item, index) => (
                    <div key={index} className={current === index ? 'dot highlight' : 'dot no-highlight'}
                         onClick={() => {
                             handleDot(index)
                         }}>
                        <i className="fa fa-regular fa-circle"></i>
                    </div>
                ))}
            </div>
            <div className='imgPlayCtrl'>
                <div onClick={handlePlay} className={isPlay ? 'active' : 'hidden'}>
                    <i className="fa fa-solid fa-play"></i>
                </div>
                <div onClick={handlePause} className={isPlay ? 'hidden' : 'active'}>
                    <i className="fa fa-solid fa-pause"></i>
                </div>
            </div>
        </div>
    );
}

export default CarouselDotsAndPlay;