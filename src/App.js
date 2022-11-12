import Carousel from "./Carousel";


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



function App() {

    return (
       <Carousel arrImgs={arrImgs}/>
    );
}

export default App;