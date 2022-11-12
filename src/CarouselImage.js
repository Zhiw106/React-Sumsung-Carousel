import React from 'react';
import './CarouselImage.css'

function CarouselImage({arrImgs,current}) {
    return (
        <div className='imgContainer'>
            {arrImgs?.map((item, index) => (
                    <div key={index} className={current === index ? 'image active' : 'image hidden'}>

                        <img src={item} alt="" className='image'/>
                    </div>

                )
            )}
        </div>
    );
}

export default CarouselImage;