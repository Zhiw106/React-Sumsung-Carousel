import React, {useEffect, useState} from 'react';
import './App.css'


const arrImgs = [
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/buying_carousel_kv_01_gb2-pro-360_01_darkred_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_02_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_04_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/buying_carousel_kv_02_gb2-pro_01_darkgray_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_05_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_07_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_01_pc.jpg?imwidth=1536',
    'https://images.samsung.com/is/image/samsung/assets/ca/computers/galaxy-book/galaxy-book2-pro/buy/gb_buying_02_kv_08_pc.jpg?imwidth=1536'
]

function App(props) {
    const [isPlay, setIsPlay] = useState(true)
    const [current, setCurrent] = useState(0)

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
            {arrImgs.map((item, index) => (
                    <div key={index} className={current === index ? 'image active' : 'image hidden'}>

                        <img src={item} alt="" className='image'/>
                    </div>

                )
            )}
            <div className='imgContainer'>
            </div>
            <div className='imgBtn'>
                <div className='imgPrevBtn' onClick={prevBtn}>
                    <i className="fa fa-solid fa-chevron-left"></i>
                </div>
                <div className='imgNextBtn' onClick={nextBtn}>
                    <i className="fa fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className='imgCtrl'>
                <div className='imgDots'>
                    {arrImgs.map((item, index) => (
                        <div key={index} className={current === index ? 'dot highlight' : 'dot no-highlight'} onClick={() => {
                            handleDot(index)
                        }}>
                            <i className="fa fa-regular fa-circle" ></i>
                        </div>
                    ))}
                </div>
                <div className='imgPlayCtrl'>
                    <div onClick={handlePlay} className={isPlay ? 'play active' : 'pause hidden'}>
                        <i className="fa fa-solid fa-play"></i>
                    </div>
                    <div onClick={handlePause} className={isPlay ? 'play hidden' : 'pause active'}>
                        <i className="fa fa-solid fa-pause"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;