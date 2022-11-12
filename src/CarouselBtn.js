import React from 'react';
import './CarouselBtn.css'

function CarouselBtn({prevBtn,nextBtn}) {

    return (
        <div className='imgBtn'>
            <div className='imgPrevBtn' onClick={prevBtn}>
                <i className="fa fa-solid fa-chevron-left"></i>
            </div>
            <div className='imgNextBtn' onClick={nextBtn}>
                <i className="fa fa-solid fa-chevron-right"></i>
            </div>
        </div>
    );
}

export default CarouselBtn;